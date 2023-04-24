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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Catagoria')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({
    summary: 'listado de Categorias',
    description:
      'En este endpoint encontrara a todos las categorias creadas hasta el momento',
  })
  @Get('/')
  async getAllUsers(): Promise<Category[]> {
    return this.categoryService.getAll({});
  }

  @ApiOperation({
    summary: 'Categoria por ID',
    description: 'En este endpoint encontrara una categoria buscada por ID',
  })
  @Get(':id')
  async getOneUser(
    @Param('id') idCategory: Category['idCategory'],
  ): Promise<Category> {
    return this.categoryService.getOne({
      idCategory,
    });
  }

  @ApiOperation({
    summary: 'Crear un nueva Categoria',
    description: 'En este endpoint se podra crear nuevas categorias',
  })
  @Post('/')
  async createCategory(
    @Body() categoryData: Prisma.CategoryCreateInput,
  ): Promise<Category> {
    return this.categoryService.create(categoryData);
  }

  @ApiOperation({
    summary: 'Modificar Categoria',
    description:
      'En este endpoint se podra modificar una categoria creada anteriormente',
  })
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

  @ApiOperation({
    summary: 'Eliminar Categoria',
    description: 'En este endpoint se podra eliminar una categoria por ID',
  })
  @Delete(':id')
  deleteUser(@Param('id') idCategory: Category['idCategory']) {
    return this.categoryService.delete({ idCategory });
  }
}
