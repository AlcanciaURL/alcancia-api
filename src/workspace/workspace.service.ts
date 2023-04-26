import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class WorkspaceService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.workspace.findMany();
  }

  async getOne(where: Prisma.WorkspaceWhereUniqueInput) {
    return this.prisma.workspace.findUnique({
      where,
      include: {
        categoryWorkspace: true,
        invitation: true,
        transaction: true,
        objetive: true,
        userWorkspace: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async create(userId: string) {
    return this.prisma.workspace.create({
      data: {
        name: 'Nuevo espacio de trabajo',
        userWorkspace: {
          create: [
            {
              userId,
            },
          ],
        },
      },
    });
  }

  async update(
    where: Prisma.WorkspaceWhereUniqueInput,
    data: Prisma.WorkspaceUpdateInput,
  ) {
    return this.prisma.workspace.update({ where, data });
  }

  async delete(where: Prisma.WorkspaceWhereUniqueInput) {
    return this.prisma.workspace.delete({ where });
  }
}
