import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MinLength(2)
  @IsOptional()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @Min(1)
  @IsOptional()
  age: number;
};