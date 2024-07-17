import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "entities/user.entity";
import { Repository } from "typeorm";
import { RegisterUserDto } from "./dto/register-user.dto";
import * as bcrypt from 'bcrypt';
import { LoginDto } from "./dto/login.dto";
import { JWT_EXPIRATION, JWT_SECRET } from "utils/constant";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) { }

  async registerUser(createUser: RegisterUserDto): Promise<User> {
    const hashedPassword = await this.hashPassword(createUser.password);

    const newUser = this.usersRepository.create({
      ...createUser,
      password: hashedPassword,
    });

    return await this.usersRepository.save(newUser);
  }

  async login(loginData: LoginDto): Promise<any> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          user_id: loginData.user_id
        }
      })

      if (!user) {
        throw new NotFoundException('User id not found');
      }

      const isCompare = await this.comparePassword(loginData.password, user.password);

      if (!isCompare) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const accessToken = this.jwtService.sign({
        id: user.id,
        userId: user.user_id,
        name: user.name
      },
      {
        secret: JWT_SECRET,
        expiresIn: JWT_EXPIRATION,
      })

      return {
        id: user.id,
        userId: user.user_id,
        name: user.name, accessToken
      }
    } catch (error) {
      throw error;
    }
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  private async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  };
}