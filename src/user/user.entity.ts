import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Vprasanja } from '../vprasanja/vprasanja.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Vprasanja, (vprasanja) => vprasanja.Users)
  vprasanja: Vprasanja[];
}
