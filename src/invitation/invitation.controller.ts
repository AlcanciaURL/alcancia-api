import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Invitation } from '@prisma/client';
import { InvitationService } from './invitation.service';

@Controller('invitation')
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  @Get('/')
  async getAll(): Promise<Invitation[]> {
    return this.invitationService.getAll();
  }

  @Get(':id')
  async getOne(
    @Param('id') idInvitation: Invitation['idInvitation'],
  ): Promise<Invitation> {
    return this.invitationService.getOne({
      idInvitation,
    });
  }

  @Post('/')
  async create(@Body() invitation: Invitation): Promise<Invitation> {
    return this.invitationService.create(invitation);
  }

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

  @Delete(':id')
  delete(@Param('id') idInvitation: Invitation['idInvitation']) {
    return this.invitationService.delete({ idInvitation });
  }
}
