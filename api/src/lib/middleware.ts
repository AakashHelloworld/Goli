import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import mongoose from "mongoose";

// Load environment variables
dotenv.config({ path: "../config.env" });

// Extend Express Request to include `user`
declare module "express-serve-static-core" {
  interface Request {
    user?: {
      _id:any
      Username: string,
      Email: string,
      Role: string,
      ProfilePic: string
    }
  }
}

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {  
  // Extract token from cookies
  const cookies = req.headers.cookie?.split(";").map(cookie => cookie.trim());
  const token = cookies?.find(cookie => cookie.startsWith("jwt="))?.split("=")[1];

  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    // Verify the token
    const decodedUser = jwt.verify(token, process.env.JSON__SECRET as string) as JwtPayload;

    // Check if user exists in the database
    const userExist = await User.findOne({ Email: decodedUser?.email });
    if (!userExist) {
      return res.status(401).json({ message: "User does not exist. Access Denied" });
    }

    // Attach the user document to the request object
    req.user = userExist;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid Token" });
  }
};
