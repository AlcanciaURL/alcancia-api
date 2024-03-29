import { Injectable } from '@nestjs/common';
import { Prisma, Transaction } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

type CreateTransaction = {
  description: string;
  amount: number;
  userId: string;
  categoryId: number;
  workspaceId: number;
};

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async getOne(
    where: Prisma.TransactionWhereUniqueInput,
  ): Promise<Transaction | null> {
    console.log(where);
    return this.prisma.transaction.findUnique({
      where,
    });
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TransactionWhereUniqueInput;
    where?: Prisma.TransactionWhereUniqueInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput;
  }): Promise<Transaction[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.transaction.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateTransaction): Promise<Transaction> {
    return this.prisma.transaction.create({
      data: {
        amount: data.amount,
        description: data.description,
        categoryId: data.categoryId,
        userId: data.userId,
        workspaceId: data.workspaceId,
      },
    });
  }

  async update(
    where: Prisma.TransactionWhereUniqueInput,
    data: Prisma.TransactionUpdateInput,
  ) {
    return this.prisma.transaction.update({ data, where });
  }

  async delete(where: Prisma.TransactionWhereUniqueInput) {
    return this.prisma.transaction.delete({ where });
  }
}
