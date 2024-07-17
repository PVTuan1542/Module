import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import { GetAllUserQueryDto } from "./dto/get-all-user.dto";

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getAll(query: GetAllUserQueryDto): Promise<User[]> {

    const users = await this.usersRepository.find();
  
    return users
  }

  async registerUser(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await this.hashPassword(createUserDto.password);

    const newUser = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
  
    return await this.usersRepository.save(newUser);
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }
}