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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Objetivos')
@Controller('objetive')
export class ObjetiveController {
  constructor(private readonly objetiveService: ObjetiveService) {}

  @ApiOperation({
    summary: 'listado de Objetivos',
    description: 'En este endpoint encontrara a todos los objetivos activos',
  })
  @Get('/')
  async getAll(): Promise<Objetive[]> {
    return this.objetiveService.getAll();
  }

  @ApiOperation({
    summary: 'Objetivos por ID',
    description: 'En este endpoint encontrara a un objetivo buscado por ID',
  })
  @Get(':id')
  async getOne(
    @Param('id') idObjetive: Objetive['idObjetive'],
  ): Promise<Objetive> {
    return this.objetiveService.getOne({
      idObjetive,
    });
  }

  @ApiOperation({
    summary: 'Crear un nuevo Objetivo',
    description: 'En este endpoint se podra crear un nuevo objetivo',
  })
  @Post('/')
  async create(@Body() objetive: Objetive): Promise<Objetive> {
    return this.objetiveService.create(objetive);
  }

  @ApiOperation({
    summary: 'Modificar Objetivo',
    description: 'En este endpoint se podra modificar un objetivo',
  })
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

  @ApiOperation({
    summary: 'Eliminar Objetivo',
    description: 'En este endpoint se podra eliminar un objetivo',
  })
  @Delete(':id')
  delete(@Param('id') idObjetive: Objetive['idObjetive']) {
    return this.objetiveService.delete({ idObjetive });
  }
}
