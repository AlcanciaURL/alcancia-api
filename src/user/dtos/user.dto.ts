import { IsString, MinLength } from 'class-validator';

export class UserDTO {
  @IsString()
  id: string;

  @IsString()
  @MinLength(3)
  firstName: string;

  @IsString()
  @MinLength(2)
  lastName: string;

  @IsString()
  @MinLength(11)
  email: string;
}
