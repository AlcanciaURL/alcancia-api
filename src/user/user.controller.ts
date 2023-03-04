import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
import { UserDTO } from './dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Post()
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserDTO> {
    return this.userService.createUser(userData);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() data: Prisma.UserUpdateInput) {
    return this.userService.update(+id, data);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number){
    return this.userService.remove(+id);
  }
}
