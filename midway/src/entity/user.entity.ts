// ./src/entity/user.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // 主键自增列
  id: number;
  @Column() // 普通列
  name: string;
  @Column() // 普通列
  age: number;
}
