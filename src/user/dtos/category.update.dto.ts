import { PartialType } from '@nestjs/mapped-types';
import { CategoryDTO } from './category.dto';

export class CategoryUpdateDTO extends PartialType(CategoryDTO) {}
