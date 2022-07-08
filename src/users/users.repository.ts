import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './users.entity';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
  async getUserById(userId: string) {
    return await this.createQueryBuilder('users')
      .leftJoin('user.avatar', 'avatar')
      .select([
        'user.id',
        'user.email',
      ])

      .where('user.id = :id', { id: userId })
      .getOne();
  }
}