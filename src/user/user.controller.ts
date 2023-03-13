import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserDTO } from './dtos/user.dto';
import { UserUpdateDTO } from './dtos/user.update.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAll({});
  }

  @Get(':id')
  async getOneUser(@Param('id') id: User['id']): Promise<User> {
    return this.userService.getOne({
      id,
    });
  }

  @Post('/')
  async signupUser(@Body() userData: UserDTO): Promise<User> {
    return this.userService.create(userData);
  }

  @Put(':id')
  updateUser(@Param('id') id: User['id'], @Body() data: UserUpdateDTO) {
    return this.userService.update(
      {
        id,
      },
      data,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') id: User['id']) {
    return this.userService.delete({
      id,
    });
  }
}
