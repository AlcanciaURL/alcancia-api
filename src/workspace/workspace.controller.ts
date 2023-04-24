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
import { Workspace } from '@prisma/client';
import { WorkspaceService } from './workspace.service';

@ApiTags('Espacio de trabajo')
@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @ApiOperation({
    summary: 'Listado de los espacios de trabajo',
    description:
      'En este endpoint encontraran todos los espacios de trabajo creados',
  })
  @Get('/')
  async getAll(): Promise<Workspace[]> {
    return this.workspaceService.getAll();
  }

  @ApiOperation({
    summary: 'Espacios de trabajo buscados por id',
    description:
      'En este endpoint encontrara los espacios de trabajo cuando necesite buscar por id',
  })
  @Get(':id')
  async getOne(
    @Param('id') idWorkspace: Workspace['idWorkspace'],
  ): Promise<Workspace> {
    return this.workspaceService.getOne({
      idWorkspace,
    });
  }

  @ApiOperation({
    summary: 'Crear espacio de trabajo',
    description: 'En este endpoint ese crean los espacios de trabajo',
  })
  @Post('/')
  async create(@Body() work: Workspace): Promise<Workspace> {
    return this.workspaceService.create(work);
  }

  @ApiOperation({
    summary: 'Actualizar la informacion de los espacios de trabajo',
    description:
      'En este endpoint podra actualizar la informacion de los espacios de trabajo en caso de que hayan habido modificaciones',
  })
  @Put(':id')
  update(
    @Param('id') idWorkspace: Workspace['idWorkspace'],
    @Body() data: Workspace,
  ) {
    return this.workspaceService.update(
      {
        idWorkspace,
      },
      data,
    );
  }

  @ApiOperation({
    summary: 'Eliminar un espacios de trabajo',
    description:
      'En este endpoint podra eliminar los espacios de trabajo por un id en especifico',
  })
  @Delete(':id')
  delete(@Param('id') idWorkspace: Workspace['idWorkspace']) {
    return this.workspaceService.delete({ idWorkspace });
  }
}
