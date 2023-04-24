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

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('/')
  async getAllTransaction(): Promise<Transaction[]> {
    return this.transactionService.getAll({});
  }

  @Get(':id')
  async getTransaction(
    @Param('id') idTransaction: Transaction['idTransaction'],
  ): Promise<Transaction> {
    return this.transactionService.getOne({
      idTransaction,
    });
  }

  @Post('/')
  async createTransaction(
    @Body() Data: Prisma.TransactionCreateInput,
  ): Promise<Transaction> {
    return this.transactionService.create(Data);
  }

  @Put(':id')
  updateUser(
    @Param('id') idTransaction: Transaction['idTransaction'],
    @Body() data: Prisma.TransactionUpdateInput,
  ) {
    return this.transactionService.update(
      {
        idTransaction,
      },
      data,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') idTransaction: Transaction['idTransaction']) {
    return this.transactionService.delete({ idTransaction });
  }
}
