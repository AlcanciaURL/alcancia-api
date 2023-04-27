import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category, Prisma } from '@prisma/client';

type CreateCategory = {
  workspaceId: number;
  name: string;
};

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/')
  async getAllUsers(): Promise<Category[]> {
    return this.categoryService.getAll({});
  }

  @Get(':id')
  async getOneUser(@Param('id') id: Category['id']): Promise<Category> {
    return this.categoryService.getOne({
      id,
    });
  }

  @Post('/')
  async createCategory(
    @Body() categoryData: CreateCategory,
  ): Promise<Category> {
    return this.categoryService.create(categoryData);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: Category['id'],
    @Body() data: Prisma.CategoryUpdateInput,
  ) {
    return this.categoryService.update(
      {
        id,
      },
      data,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') id: Category['id']) {
    return this.categoryService.delete({ id });
  }
}
