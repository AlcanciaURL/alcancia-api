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

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/')
  async getAllUsers(): Promise<Category[]> {
    return this.categoryService.getAll({});
  }

  @Get(':id')
  async getOneUser(
    @Param('id') idCategory: Category['idCategory'],
  ): Promise<Category> {
    return this.categoryService.getOne({
      idCategory,
    });
  }

  @Post('/')
  async createCategory(
    @Body() categoryData: Prisma.CategoryCreateInput,
  ): Promise<Category> {
    return this.categoryService.create(categoryData);
  }

  @Put(':id')
  updateUser(
    @Param('id') idCategory: Category['idCategory'],
    @Body() data: Prisma.CategoryUpdateInput,
  ) {
    return this.categoryService.update(
      {
        idCategory,
      },
      data,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') idCategory: Category['idCategory']) {
    return this.categoryService.delete({ idCategory });
  }
}
