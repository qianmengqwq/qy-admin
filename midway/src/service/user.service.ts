import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { User } from '../entity/user';
import { FindOptionsWhere, Repository } from 'typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async create(user: User) {
    await this.userModel.save(user);
    return user;
  }

  async remove(user: User) {
    await await this.userModel.delete(user);
  }

  async edit(user: User): Promise<User> {
    return await this.userModel.save(user);
  }

  async page(page: number, pageSize: number, where?: FindOptionsWhere<User>) {
    const order: any = { create_date: 'desc' };

    const [data, total] = await this.userModel.findAndCount({
      order,
      skip: page * pageSize,
      take: pageSize,
      where,
    });

    return { data, total };
  }

  async list(where?: FindOptionsWhere<User>) {
    const order: any = { create_date: 'desc' };
    const data = await this.userModel.find({
      where,
      order,
    });

    return data;
  }

  async getById(id: number) {
    return await this.userModel.findOneBy({ id });
  }
}
