import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class ListUsersDto {
  @IsPositive()
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  page: number;

  @IsPositive()
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  limit: number;
}