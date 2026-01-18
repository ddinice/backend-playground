import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ListUsersResponse, User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ListUsersDto } from './dto/list-users.dto';
import { seedUsers } from './users.seed';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private date = new Date();

  constructor() {
    this.users.push(...seedUsers());
  }

  private generatedId = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  private isEntityExists(email: string): boolean {
    return this.users.some((user) => user.email === email);
  }

  getAll(query: ListUsersDto): ListUsersResponse {
    const { page = 1, limit = 10 } = query;

    const offset = (page - 1) * limit;
    const total = this.users.length;

    const items = this.users.slice(offset, offset + limit);

    return {
      items,
      meta: {
        total,
        limit,
        offset,
        page,
        pages: Math.ceil(total / limit),
      },
    };
  }

  getOneById(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  createOne(dto: CreateUserDto): User {
    // normalize email
    const formatEmail = dto.email.trim().toLowerCase();

    // check if email already exists
    const isUserEmailExists = this.isEntityExists(formatEmail);

    if (isUserEmailExists) {
      throw new BadRequestException('User with this email already exists');
    }

    const newUser: User = {
      id: this.generatedId(),
      firstName: dto.firstName,
      lastName: dto.lastName,
      age: dto.age,
      email: formatEmail,
      createAt: this.date,
      updateAt: this.date,
    };
    this.users.push(newUser);

    return newUser;
  }

  updateOne(id: string, dto: UpdateUserDto): User {
    const user = this.getOneById(id);

    const updatedUser: User = {
      ...user,
      ...dto,
      email: dto.email ? dto.email.trim().toLowerCase() : user.email,
      updateAt: this.date,
    };

    this.users = this.users.map((u) => (u.id === id ? updatedUser : u));

    return updatedUser;
  }

  deleteOne(id: string): { status: string } {
    this.users = this.users.filter(user => user.id !== id);
    return {
      status: 'success',
    }
  }
}
