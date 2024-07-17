import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar'})
  name: string;

  @Column({ type: 'varchar'})
  email: string;

  @Column({ type: 'longtext', nullable: true })
  emailTitle: string;

  @Column({ type: 'longtext', nullable: true })
  emailNote: string;

  @Column({ type: 'timestamp', nullable: true, default: () => 'NULL' })
  email_verified_at: Date;

  @Column({ type: 'varchar'})
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  remember_token: string;

  @Column({ type: 'int', default: 0 })
  level: number;

  @Column({ type: 'int', default: 0 })
  status: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  user_id: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ type: 'text', nullable: true })
  job: string;

  @Column({ type: 'text', nullable: true })
  note: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone: string;

  @Column({ type: 'varchar', nullable: true })
  google_id: string;

  @Column({ type: 'varchar', nullable: true })
  facebook_id: string;

  @Column({ type: 'varchar', nullable: true })
  kakao_id: string;

  @Column({ type: 'varchar', nullable: true })
  naver_id: string;

  @Column({ type: 'varchar', nullable: true })
  apple_id: string;

  @Column({ type: 'varchar', nullable: true })
  zipcode: string;

  @Column({ type: 'text', nullable: true })
  detail_address: string;

  @Column({ type: 'text', nullable: true })
  withdrawal_reason: string;

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updated_at: Date;
}
