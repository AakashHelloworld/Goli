import { Request, Response, NextFunction } from "express";
import { APIError } from "./handle-async-request";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof APIError) {
    res.status(err.code).json({
      success: false,
      error: { message: err.message },
    });
  } else {
    console.error(err);
    res.status(500).json({
      success: false,
      error: { message: "Internal Server Error" },
    });
  }
};
