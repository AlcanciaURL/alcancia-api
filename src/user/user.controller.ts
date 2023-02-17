import { Controller, Get, Post, Body } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from './user.service';



@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserModel[]>{
    return this.userService.users({});
  }

  @Post()
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

}
