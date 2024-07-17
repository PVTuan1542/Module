import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "entities/user.entity";


@Controller('users')
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Post('/register')
  async registerUser(@Body() createUserDto: CreateUserDto) : Promise<User> {

    return this.userService.registerUser(createUserDto);
  }
}