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

type CreateInvitation = {
  invitedUserId: string;
  userId: string;
  workspaceId: number;
};

@Controller('invitation')
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  @Get('/')
  async getAll(): Promise<Invitation[]> {
    return this.invitationService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Invitation> {
    return this.invitationService.getOne({
      id: parseInt(id),
    });
  }

  @Post('/')
  async create(@Body() invitation: CreateInvitation): Promise<Invitation> {
    return this.invitationService.create(invitation);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Invitation) {
    return this.invitationService.update(
      {
        id: parseInt(id),
      },
      data,
    );
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.invitationService.delete({ id: parseInt(id) });
  }
}
