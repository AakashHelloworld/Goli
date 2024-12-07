import { Request, Response } from 'express';

export interface IAPIResponse<T = undefined> {
    success: true;
    data?: T;
    pagination?: {
      totalItems: number;
      totalPages: number;
      currentPage: number;
      pageSize: number;
    }
  }


export class APIError extends Error {
    constructor(public code: number, message: string) {
      super(message);
    }
}

export const handleAsyncRequest =
<T>(
  handler: (req: Request, res: Response) => Promise<IAPIResponse<T> | void>
) =>
  async (req: Request, res: Response) => {
    try {
      const result = await handler(req, res);
      if (!res.headersSent) {
        const defaultStatusCode = req.method === "POST" ? 201 : 200;
        res.status(defaultStatusCode).send(result);
      }
    } catch (e) {
      console.error(e);

      if (e instanceof APIError) {
        res.status(e.code).send({
          success: false,
          error: {
            message: e.message,
          },
        });
      } else {
        res.status(500).send({
          success: false,
          error: {
            message: `Unable to process request at this time. Please try again later.`,
          },
        });
      }
    }
  };
