import "reflect-metadata";
import express, { Request, Response } from "express";
import { router } from "./routes"

import "./database"
import { NextFunction } from 'connect';
import { AppError } from "./errors/AppError";
const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal server error ${err.message}`
  });
})


app.listen(3333, () => {
  console.log('server is up and running on port 3333');
})