import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UsersRepository,
  ) {}

  async getById(id: string): Promise<any> {
    const user = await this.userRepository.findOne({ id });
    if (user) {
      return user;
    }
  }
}
