import { Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handler(request: Request, response: Response) {

    const { name, email, admin } = request.body;

    const createUserService = new CreateUserService();
    console.log('hi')

    const user = await createUserService.execute({ name, email, admin });      
    return response.json(user)


  }
}