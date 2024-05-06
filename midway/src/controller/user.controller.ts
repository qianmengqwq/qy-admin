import {
  Body,
  Controller,
  Inject,
  Post,
  Provide,
  ALL,
  Put,
  Del,
  Get,
  Query,
  Param,
} from '@midwayjs/core';
import { UserService } from '../service/user.service';
import { Validate } from '@midwayjs/validate';
import { UserDTO } from '../dto/user';
import { User } from '../entity/user';
@Provide()
@Controller('/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Post('/')
  @Validate()
  async create(@Body(ALL) data: UserDTO) {
    const user = new User();
    user.name = data.name;
    user.age = data.age;
    return await this.userService.create(user);
  }

  @Put('/')
  @Validate()
  async edit(@Body(ALL) data: UserDTO) {
    const user = await this.userService.getById(data.id);
    user.name = data.name;
    user.age = data.age;
    return await this.userService.edit(user);
  }

  @Del('/:id')
  async remove(@Param('id') id: string) {
    const user = await this.userService.getById(id);
    return await this.userService.remove(user);
  }

  @Get('/:id')
  async get(@Param('id') id: string) {
    return await this.userService.getById(id);
  }

  @Get('/page')
  async page(@Query('page') page: number, @Query('size') size: number) {
    return await this.userService.page(page, size);
  }

  @Get('/list')
  async list() {
    return await this.userService.list();
  }
}
