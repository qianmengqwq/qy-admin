import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn() // 主键自增列
  id: number;
  @Column({ comment: '姓名' })
  name: string;
  @Column({ comment: '年龄' }) // 普通列
  age: number;
  @CreateDateColumn({ comment: '创建日期' })
  create_date: Date;
  @UpdateDateColumn({ comment: '更新日期' })
  update_date: Date;
}
