import { IsString, MinLength } from 'class-validator';

export class UserDTO {
  @IsString()
  idUser: string;

  @IsString()
  @MinLength(3)
  first_name: string;

  @IsString()
  @MinLength(2)
  last_name: string;

  @IsString()
  @MinLength(11)
  email: string;
}
