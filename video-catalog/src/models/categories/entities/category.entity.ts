import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Exclude, Expose } from 'class-transformer';

@Entity('categories')
export class Category {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @Expose({ name: 'id' })
  @Column('uuid')
  id_uuid: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Exclude()
  @Column()
  is_active: boolean;

  @Exclude()
  @CreateDateColumn()
  deleted_at: Date;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;
}
