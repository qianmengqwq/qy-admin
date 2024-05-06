import { Inject } from '@midwayjs/core';
import { BaseEntity } from '../common/base.entity';
import { Context } from 'vm';
import { FindOptionsWhere, Repository } from 'typeorm';

export abstract class BaseService<T extends BaseEntity> {
  @Inject()
  ctx: Context;

  abstract getModel(): Repository<T>;

  async create(entity: T) {
    return await this.getModel().save(entity);
  }

  async edit(entity: T): Promise<T | void> {
    return await this.getModel().save(entity);
  }

  async remove(entity: T) {
    await this.getModel().remove(entity);
  }

  async getById(id: string): Promise<T> {
    return await this.getModel()
      .createQueryBuilder('model')
      .where('model.id = :id', { id })
      .getOne();
  }

  async page(page: number, pageSize: number, where?: FindOptionsWhere<T>) {
    const order: any = { create_date: 'desc' };
    const [data, total] = await this.getModel().findAndCount({
      where,
      order,
      skip: page * pageSize,
      take: pageSize,
    });

    return { data, total };
  }

  async list(where?: FindOptionsWhere<T>) {
    const order: any = { create_date: 'desc' };
    const data = await this.getModel().find({
      where,
      order,
    });
    return data;
  }
}
