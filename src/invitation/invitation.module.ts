import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { InvitationController } from './invitation.controller';
import { InvitationService } from './invitation.service';

@Module({
  controllers: [InvitationController],
  providers: [InvitationService, PrismaService],
})
export class InvitationModule {}
