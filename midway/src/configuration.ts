import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
import * as orm from '@midwayjs/typeorm';
import * as redis from '@midwayjs/redis';
import * as swagger from '@midwayjs/swagger';
import * as i18n from '@midwayjs/i18n'
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
import { ValidateErrorFilter } from './filter/validate.fillter';
import { CommonErrorFilter } from './filter/common.filter';
@Configuration({
  imports: [
    koa,
    validate,
    orm,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
    redis,
    {
      component: swagger,
      enabledEnvironment: ['local'],
    },
    i18n,
    validate
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    this.app.useFilter([ValidateErrorFilter,CommonErrorFilter])
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}
