// src/dto/user.ts
import { ApiProperty } from '@midwayjs/swagger';
import { Rule, RuleType } from '@midwayjs/validate';

export class UserDTO {
  @ApiProperty({ description: 'id' })
  @Rule(RuleType.allow(null))
  id?: number;
  @ApiProperty({ description: '姓名' })
  @Rule(RuleType.string().required().error(new Error('姓名不能为空')))
  name: string;
  @ApiProperty({ description: '年龄' })
  @Rule(RuleType.number().required().error(new Error('年龄不能为空')))
  age: number;
}
