import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Invitation } from '@prisma/client';
import { InvitationService } from './invitation.service';

@ApiTags('Invitaciones')
@Controller('invitation')
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  @ApiOperation({
    summary: 'Listado de invitaciones',
    description:
      'En este endpoint encontraran todas las invitaciones existentes',
  })
  @Get('/')
  async getAll(): Promise<Invitation[]> {
    return this.invitationService.getAll();
  }

  @ApiOperation({
    summary: 'Busqueda de invitaciones por Id',
    description:
      'En este endpoint encontrara la invitacion buscada por un id especifico',
  })
  @Get(':id')
  async getOne(
    @Param('id') idInvitation: Invitation['idInvitation'],
  ): Promise<Invitation> {
    return this.invitationService.getOne({
      idInvitation,
    });
  }

  @ApiOperation({
    summary: 'Crear invitaciones',
    description: 'En este endpoint se crea la invitacion',
  })
  @Post('/')
  async create(@Body() invitation: Invitation): Promise<Invitation> {
    return this.invitationService.create(invitation);
  }

  @ApiOperation({
    summary: 'Actualiza invitaciones',
    description:
      'En este endpoint se pueden realizar modificaciones de las invitaciones',
  })
  @Put(':id')
  update(
    @Param('id') idInvitation: Invitation['idInvitation'],
    @Body() data: Invitation,
  ) {
    return this.invitationService.update(
      {
        idInvitation,
      },
      data,
    );
  }

  @ApiOperation({
    summary: 'Eliminar invitaciones',
    description: 'En este endpoint se eliminan las invitaciones',
  })
  @Delete(':id')
  delete(@Param('id') idInvitation: Invitation['idInvitation']) {
    return this.invitationService.delete({ idInvitation });
  }
}
