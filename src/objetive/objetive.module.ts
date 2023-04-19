import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ObjetiveService } from './objetive.service';
import { ObjetiveController } from './objetive.controller';

@Module({
  providers: [ObjetiveService, PrismaService],
  controllers: [ObjetiveController],
})
export class ObjetiveModule {}
