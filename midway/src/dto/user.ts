// src/dto/user.ts
import { ApiProperty } from '@midwayjs/swagger';
import { Rule, RuleType } from '@midwayjs/validate';
import { R } from '../common/base.error.util';

export class UserDTO {
  @ApiProperty({ description: 'id' })
  @Rule(RuleType.allow(null))
  id?: string;
  @ApiProperty({ description: '姓名' })
  @Rule(RuleType.string().required().error(R.validateError('姓名不能为空')))
  name: string;
  @ApiProperty({ description: '年龄' })
  @Rule(RuleType.number().required().error(R.validateError('年龄不能为空')))
  age: number;
}
