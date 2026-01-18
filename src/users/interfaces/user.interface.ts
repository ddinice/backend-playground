export interface User {
  id: string;
  firstName: string;
  lastName?: string;
  age: number;
  email: string;
  phone?: string;
  createAt: Date;
  updateAt: Date;
}

export interface ListUsersResponse {
  items: User[];
  meta: {
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
  }
}