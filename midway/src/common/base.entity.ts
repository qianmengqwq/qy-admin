import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  @CreateDateColumn()
  create_time?: Date;
  @UpdateDateColumn()
  update_time?: Date;
}
