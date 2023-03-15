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
  async getOneUser(@Param('id') idUser: User['idUser']): Promise<User> {
    return this.userService.getOne({
      idUser,
    });
  }

  @Post('/')
  async signupUser(@Body() userData: UserDTO): Promise<User> {
    return this.userService.create(userData);
  }

  @Put(':id')
  updateUser(@Param('id') idUser: User['idUser'], @Body() data: UserUpdateDTO) {
    return this.userService.update(
      {
        idUser,
      },
      data,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') idUser: User['idUser']) {
    return this.userService.delete({ idUser });
  }
}
