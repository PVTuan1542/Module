import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { User } from "entities/user.entity";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController {
  constructor (private readonly userService: AuthService) {}

  @Post('/register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) : Promise<User> {

    return this.userService.registerUser(registerUserDto);
  }

  @Post('/login')
  async login(@Body() loginData: LoginDto) : Promise<User> {
    
    return this.userService.login(loginData);
  }
}