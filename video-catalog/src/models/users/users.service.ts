import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

interface User {
  id: number;
  name: string;
  email: string;
}
@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 1,
      name: 'Ilgsson',
      email: 'ilgssonbraga@gmail.com',
    },
    {
      id: 2,
      name: 'Ilgner',
      email: 'ilgnerbraga@gmail.com',
    },
  ];

  create(createUserDto: CreateUserDto) {
    const id = this.users.length + 1;
    const user = {
      id,
      name: createUserDto.name,
      email: createUserDto.email,
    };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((user) => user.id == id);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const finduser = this.users.find((u) => u.id == id);
    this.users.map((user) => {
      if (user.id == id) {
        (finduser.name = updateUserDto.name),
          (finduser.email = updateUserDto.email);
      }
    });
    return finduser;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id == id);
    if (userIndex >= 0) {
      return this.users.splice(userIndex, 1);
    }

    return false;
  }
}
