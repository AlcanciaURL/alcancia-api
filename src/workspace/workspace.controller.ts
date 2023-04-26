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

type CreateWorkspace = {
  userId: string;
};

@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Get('/')
  async getAll(): Promise<Workspace[]> {
    return this.workspaceService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Workspace> {
    return this.workspaceService.getOne({
      id: parseInt(id),
    });
  }

  @Post('/')
  async create(@Body() work: CreateWorkspace): Promise<Workspace> {
    return this.workspaceService.create(work.userId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Workspace) {
    return this.workspaceService.update(
      {
        id: parseInt(id),
      },
      data,
    );
  }

  @Delete(':id')
  delete(@Param('id') id: Workspace['id']) {
    return this.workspaceService.delete({ id });
  }
}
