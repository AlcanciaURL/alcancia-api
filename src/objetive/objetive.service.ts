import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ObjetiveService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.objetive.findMany();
  }

  async getOne(where: Prisma.ObjetiveWhereUniqueInput) {
    return this.prisma.objetive.findUnique({
      where,
    });
  }

  async create(data: Prisma.ObjetiveCreateManyInput) {
    return this.prisma.objetive.create({
      data,
    });
  }

  async update(
    where: Prisma.ObjetiveWhereUniqueInput,
    data: Prisma.ObjetiveUpdateManyMutationInput,
  ) {
    return this.prisma.objetive.update({ where, data });
  }

  async delete(where: Prisma.ObjetiveWhereUniqueInput) {
    return this.prisma.objetive.delete({ where });
  }
}
