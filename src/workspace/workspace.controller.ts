import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Workspace } from '@prisma/client';
import { WorkspaceService } from './workspace.service';

@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Get('/')
  async getAll(): Promise<Workspace[]> {
    return this.workspaceService.getAll();
  }

  @Get(':id')
  async getOne(
    @Param('id') idWorkspace: Workspace['idWorkspace'],
  ): Promise<Workspace> {
    return this.workspaceService.getOne({
      idWorkspace,
    });
  }

  @Post('/')
  async create(@Body() work: Workspace): Promise<Workspace> {
    return this.workspaceService.create(work);
  }

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

  @Delete(':id')
  delete(@Param('id') idWorkspace: Workspace['idWorkspace']) {
    return this.workspaceService.delete({ idWorkspace });
  }
}
