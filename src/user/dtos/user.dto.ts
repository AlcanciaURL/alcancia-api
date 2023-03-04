import { IsInt, IsString, Max, Min, MinLength, maxLength, MaxLength } from 'class-validator';

export class UserDTO {
  @IsString()
  @MinLength(3)
  first_name: string;

  @IsString()
  @MinLength(2)
  last_name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(15)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;

  @IsString()
  @MinLength(11)
  email: string;
}
