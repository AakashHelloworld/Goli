import { Router } from "express";
import { handleAsyncRequest, APIError } from "../../lib/handle-async-request";
import { AuthService } from "../../lib/authService";
import { authenticateToken } from "../../lib/middleware";
export class APIUser {
  static instance() {
    const router = Router();

    router.post(
      "/google",
      handleAsyncRequest(async (req, res) => {
        const { idToken } = req.body;

        if (!idToken) {
          throw new APIError(400, "Missing Google ID token");
        }

        // Authenticate with Google
        const userData = await AuthService.verifyGoogleToken(idToken);

        // Find or create the user
        const user = await AuthService.findOrCreateUser({
          Email: userData.email,
          Username: userData.username,
          ProfilePic: userData.profilePic,
        });

        // Generate Access Token
        const accessToken = AuthService.generateAccessToken({
          id: user.id,
          email: user.Email,
        });

        // Send HTTP-only cookies
        res.cookie("jwt", accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          maxAge: 15 * 60 * 1000, // 15 minutes
        });

        res.status(200).json({
          message: "Login successful",
          user,
        });
      })
    );

    router.use(authenticateToken)

    router.get('/isme', handleAsyncRequest(async(req, res)=>{
      console.log(req?.user)
      res.status(200).json({
        message: "Authorized",
        user: req?.user
      });
    }))
    return router;
  }
}
