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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'listado de usuarios',
    description: 'En este endpoint encontrara a todos los usuarios activos',
  })
  @Get('/')
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAll({});
  }

  @ApiOperation({
    summary: 'Usuario por ID',
    description: 'En este endpoint encontrara a un usuario buscado por ID',
  })
  @Get(':id')
  async getOneUser(@Param('id') idUser: User['idUser']): Promise<User> {
    return this.userService.getOne({
      idUser,
    });
  }

  @ApiOperation({
    summary: 'Crear un nuevo Usuario',
    description: 'En este endpoint se podra crear un nuevo usuario',
  })
  @Post('/')
  async signupUser(@Body() userData: UserDTO): Promise<User> {
    return this.userService.create(userData);
  }

  @ApiOperation({
    summary: 'Modificar Usuario',
    description: 'En este endpoint se podra modificar un usuario',
  })
  @Put(':id')
  updateUser(@Param('id') idUser: User['idUser'], @Body() data: UserUpdateDTO) {
    return this.userService.update(
      {
        idUser,
      },
      data,
    );
  }

  @ApiOperation({
    summary: 'Eliminar Usuario',
    description: 'En este endpoint se podra eliminar un usuario',
  })
  @Delete(':id')
  deleteUser(@Param('id') idUser: User['idUser']) {
    return this.userService.delete({ idUser });
  }
}
