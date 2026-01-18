// users.constants.ts
import { User } from './interfaces/user.interface';

export const seedUsers = (): User[] => {
  const now = new Date();
  return [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'example@example.com',
      createAt: now,
      updateAt: now,
    },
  ];
};
