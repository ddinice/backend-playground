import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ListUsersResponse, User } from "./interfaces/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ListUsersDto } from "./dto/list-users.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
    getList(@Query() query: ListUsersDto): ListUsersResponse {
      return this.usersService.getAll(query);
  }

  @Get(':id')
    getOneById(@Param('id') id: string): User {
      return this.usersService.getOneById(id);
  }

  @Post()
    createOne(@Body() dto: CreateUserDto): User {
      return this.usersService.createOne(dto);
  } 

  @Patch(':id')
    updateOne(@Param('id') id: string, @Body() dto: UpdateUserDto): User {
      return this.usersService.updateOne(id, dto);
  }

  @Delete(':id')
    deleteOne(@Param('id') id: string): { status: string } {
      return this.usersService.deleteOne(id);
  }
}