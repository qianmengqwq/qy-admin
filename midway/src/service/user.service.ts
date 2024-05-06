import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { User } from '../entity/user';
import { Repository } from 'typeorm';
import { BaseService } from './base.service';

@Provide()
export class UserService extends BaseService<User>{
  @InjectEntityModel(User)
  userModel: Repository<User>;

  getModel(): Repository<User> {
    return this.userModel;
  }
}
