import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { JoinColumn } from 'typeorm/browser';

@Entity('vprasanja')
export class Vprasanja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vprasanje: string;

  @Column()
  dateandtime: Date;

  @ManyToOne(() => User, (User) => User.vprasanja)
  @JoinColumn({ name: 'UserID' })
  Users: User[];
}
