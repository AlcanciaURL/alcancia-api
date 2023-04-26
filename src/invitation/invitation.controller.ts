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
  async getOne(@Param('id') id: Invitation['id']): Promise<Invitation> {
    return this.invitationService.getOne({
      id,
    });
  }

  @Post('/')
  async create(@Body() invitation: Invitation): Promise<Invitation> {
    return this.invitationService.create(invitation);
  }

  @Put(':id')
  update(@Param('id') id: Invitation['id'], @Body() data: Invitation) {
    return this.invitationService.update(
      {
        id,
      },
      data,
    );
  }

  @Delete(':id')
  delete(@Param('id') id: Invitation['id']) {
    return this.invitationService.delete({ id });
  }
}
