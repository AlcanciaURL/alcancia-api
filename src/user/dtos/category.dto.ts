import { IsInt, IsString } from 'class-validator';

export class CategoryDTO {
  @IsString()
  name: string;

  @IsInt()
  workspace_id: number;
}
