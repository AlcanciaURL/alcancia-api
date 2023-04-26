import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Objetive } from '@prisma/client';
import { ObjetiveService } from './objetive.service';

@Controller('objetive')
export class ObjetiveController {
  constructor(private readonly objetiveService: ObjetiveService) {}

  @Get('/')
  async getAll(): Promise<Objetive[]> {
    return this.objetiveService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: Objetive['id']): Promise<Objetive> {
    return this.objetiveService.getOne({
      id,
    });
  }

  @Post('/')
  async create(@Body() objetive: Objetive): Promise<Objetive> {
    return this.objetiveService.create(objetive);
  }

  @Put(':id')
  update(@Param('id') id: Objetive['id'], @Body() data: Objetive) {
    return this.objetiveService.update(
      {
        id,
      },
      data,
    );
  }

  @Delete(':id')
  delete(@Param('id') id: Objetive['id']) {
    return this.objetiveService.delete({ id });
  }
}
