import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { UsersRepositories } from "../repositories/UserRepositories";

type UserRequest = {
  name: string;
  email: string;
  admin?: boolean;
};

export class CreateUserService {
  
  async execute({name, email, admin}: UserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if(!email) {
      throw new AppError("Invalid Email", 400);
    }
    
    const hasUser = await usersRepository.findOne({ email });

    if (hasUser) {
      throw new Error("User already exists");
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    });
    
    await usersRepository.save(user);     

    return user;

  };

};