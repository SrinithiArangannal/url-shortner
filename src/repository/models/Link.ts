import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  url?: string;

  @Column()
  shortUrl?: string;

  @Column({ default: 0 })
  count?: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
