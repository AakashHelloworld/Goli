import express, { Express, Request, Response } from "express";
import { Server } from "http";
import { Database } from "./database";
import { APIRouter } from "./api/api";
import dotenv from 'dotenv';


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

    // Use the router
    app.use('/api/v1', apiRouter);


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
