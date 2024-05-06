// // ./src/controller/home.controller.ts
// import { Controller, Get, Inject } from '@midwayjs/core';
// import { InjectEntityModel } from '@midwayjs/typeorm';
// import { User } from '../entity/user.entity';
// import { Repository } from 'typeorm';
// import { RedisService } from '@midwayjs/redis';
// import { MidwayI18nService } from '@midwayjs/i18n';

// @Controller('/')
// export class HomeController {
//   // 自动注入模型
//   @InjectEntityModel(User)
//   userModel: Repository<User>;

//   @Inject()
//   redisService: RedisService;
//   @Inject()
//   i18nService: MidwayI18nService;
//   @Get('/')
//   async home(): Promise<string> {
//     // 查询user表数据
//     // return await this.userModel.find();
//     // await this.redisService.set('foo', 'bar');
//     // return await this.redisService.get('foo');
//     return this.i18nService.translate('hello', {
//       locale: 'zh_CN',
//     });
//   }
// }
// src/controller/home.controller.ts
// import { Body, Controller, Post } from '@midwayjs/core';
// import { UserDTO } from '../dto/user';

// @Controller('/')
// export class HomeController {
//   @Post('/')
//   async home(@Body() user: UserDTO): Promise<void> {
//     console.log(user);
//   }
// }

// src/controller/home.controller.ts
// import { Controller, Inject, Post } from '@midwayjs/core';
// import { ILogger } from '@midwayjs/logger';
// import { CommonError } from '../common/common.error';

// @Controller('/')
// export class HomeController {
//   @Inject()
//   logger: ILogger;

//   @Post('/')
//   async home(): Promise<void> {
//     throw new CommonError('error');
//   }
// }
import { Body, Controller, Inject, Post } from '@midwayjs/core';
import { UserDTO } from '../dto/user';
import { ILogger } from '@midwayjs/logger';

@Controller('/')
export class HomeController {
  @Inject()
  logger: ILogger;

  @Post('/')
  async home(@Body() user: UserDTO): Promise<void> {
    this.logger.info('hello');
    console.log(user);
  }
}
