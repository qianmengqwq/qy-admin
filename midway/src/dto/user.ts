// src/dto/user.ts
import { Rule, RuleType } from '@midwayjs/validate';

export class UserDTO {
  @Rule(RuleType.number().required().error(new Error('error'))) // id不能为空，并且是数字
  id: number;

  @Rule(RuleType.number().max(60)) // 年龄字段必须是数字，并且不能大于60
  age: number;
}
