import {
  IsEmail,
  IsOptional,
  IsString,
  Min,
  MinLength,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  firstName?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  lastName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  age?: number;
}
