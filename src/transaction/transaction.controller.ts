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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Transacción')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @ApiOperation({
    summary: 'listado de transacciones',
    description: 'En este endpoint encontrara a todas las transacciones',
  })
  @Get('/')
  async getAllTransaction(): Promise<Transaction[]> {
    return this.transactionService.getAll({});
  }

  @ApiOperation({
    summary: 'Transaccion por ID',
    description: 'En este endpoint encontrara a una transaccion buscada por ID',
  })
  @Get(':id')
  async getTransaction(
    @Param('id') idTransaction: Transaction['idTransaction'],
  ): Promise<Transaction> {
    return this.transactionService.getOne({
      idTransaction,
    });
  }

  @ApiOperation({
    summary: 'Crear un nueva transaccion',
    description: 'En este endpoint se podra crear un nuevas transacciones',
  })
  @Post('/')
  async createTransaction(
    @Body() Data: Prisma.TransactionCreateInput,
  ): Promise<Transaction> {
    return this.transactionService.create(Data);
  }

  @ApiOperation({
    summary: 'Modificar Transaccion',
    description: 'En este endpoint se podra modificar una transaccion',
  })
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

  @ApiOperation({
    summary: 'Eliminar Transaccion',
    description: 'En este endpoint se podra eliminar una transaccion por ID',
  })
  @Delete(':id')
  deleteUser(@Param('id') idTransaction: Transaction['idTransaction']) {
    return this.transactionService.delete({ idTransaction });
  }
}
