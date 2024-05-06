import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn() // 主键自增列
  id: string;
  @Column({ comment: '姓名' })
  name: string;
  @Column({ comment: '年龄' }) // 普通列
  age: number;
}
