import { Controller, Inject, Post } from '@midwayjs/core';
import { ILogger } from '@midwayjs/logger';
import { R } from '../common/base.error.util';

@Controller('/')
export class HomeController {
  @Inject()
  logger: ILogger;

  @Post('/')
  async home(): Promise<void> {
    throw R.error('error');
  }
}
