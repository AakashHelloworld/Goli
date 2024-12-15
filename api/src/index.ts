import express, { Express, Request, Response } from "express";
import { Server } from "http";
import { Database } from "./database";
import { APIRouter } from "./api/api";
import dotenv from 'dotenv';
import cors from "cors";
import { errorMiddleware } from "./lib/errorMiddleware";


dotenv.config({path: './config.env'});
const app: Express = express();
const port = 3000;

const startServer = async () => {
  try {
    // Initialize the database
    Database();

    // Wait for the API Router instance
    const apiRouter = await APIRouter.instance();

    // Middleware
    app.use(express.json());



    // CORS Middleware
    app.use(
      cors({
        origin: "http://localhost:5173", // Replace with your React app's URL
        credentials: true, // Allow cookies and authorization headers
        allowedHeaders: ['Content-Type', 'Authorization']
      })
    );


    // Use the router
    app.use('/api/v1', apiRouter);

    // Centralized error handling middleware
    app.use(errorMiddleware)


    // Start the server
    const server: Server = app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });

    return { app, server };
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1); // Exit the process with an error code
  }
};

startServer();
