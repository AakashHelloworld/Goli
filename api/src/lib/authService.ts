import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/user";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '../config.env' });

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export class AuthService {
  static async verifyGoogleToken(idToken: string) {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) throw new Error("Invalid Google token");
    
    return {
      email: payload.email,
      username: payload.name,
      profilePic: payload.picture,
    };
  }

  static async findOrCreateUser(userdata: {
    Email: string | undefined;
    Username: string | undefined ;
    ProfilePic: string | undefined;
  }) {
    let user = await User.findOne({ Email: userdata.Email });
    if (!user) {
      user = await User.create(userdata);
    }
    return user;
  }

  static generateAccessToken(payload: object) {
    return jwt.sign(payload, process.env.JSON__SECRET as string, {
      expiresIn: "24d",
    });
  }
}
