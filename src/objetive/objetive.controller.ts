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
  async getOne(
    @Param('id') idObjetive: Objetive['idObjetive'],
  ): Promise<Objetive> {
    return this.objetiveService.getOne({
      idObjetive,
    });
  }

  @Post('/')
  async create(@Body() objetive: Objetive): Promise<Objetive> {
    return this.objetiveService.create(objetive);
  }

  @Put(':id')
  update(
    @Param('id') idObjetive: Objetive['idObjetive'],
    @Body() data: Objetive,
  ) {
    return this.objetiveService.update(
      {
        idObjetive,
      },
      data,
    );
  }

  @Delete(':id')
  delete(@Param('id') idObjetive: Objetive['idObjetive']) {
    return this.objetiveService.delete({ idObjetive });
  }
}
