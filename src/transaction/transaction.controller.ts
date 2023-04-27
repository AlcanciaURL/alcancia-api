import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Prisma, Transaction } from '@prisma/client';

type CreateTransaction = {
  description: string;
  amount: number;
  userId: string;
  categoryId: number;
  workspaceId: number;
};

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('/')
  async getAllTransaction(): Promise<Transaction[]> {
    return this.transactionService.getAll({});
  }

  @Get(':id')
  async getTransaction(
    @Param('id') id: Transaction['id'],
  ): Promise<Transaction> {
    return this.transactionService.getOne({
      id,
    });
  }

  @Post('/')
  async createTransaction(
    @Body() data: CreateTransaction,
  ): Promise<Transaction> {
    return this.transactionService.create(data);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: Transaction['id'],
    @Body() data: Prisma.TransactionUpdateInput,
  ) {
    return this.transactionService.update(
      {
        id,
      },
      data,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') id: Transaction['id']) {
    return this.transactionService.delete({ id });
  }
}
