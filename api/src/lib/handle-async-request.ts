import { Request, Response, NextFunction } from "express";

export interface IAPIResponse<T = undefined> {
  success: true;
  data?: T;
  pagination?: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
  };
}

export class APIError extends Error {
  constructor(public code: number, message: string) {
    super(message);
  }
}

export const handleAsyncRequest =
  <T>(
    handler: (req: Request, res: Response, next: NextFunction) => Promise<IAPIResponse<T> | void>
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await handler(req, res, next);
      if (!res.headersSent && result) {
        const defaultStatusCode = req.method === "POST" ? 201 : 200;
        res.status(defaultStatusCode).send(result);
      }
    } catch (e) {
      next(e); // Delegate errors to centralized error handler
    }
  };
