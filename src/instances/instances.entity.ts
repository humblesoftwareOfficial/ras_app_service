import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Index,
  UpdateDateColumn,
} from 'typeorm';

enum EStatus {
  success = 'success',
  'internal-failure' = 'internal-failure',
  'service-failure' = 'service-failure',
}

@Entity({ name: 'ras_instances' })
@Index('serviceID_scenario', ['serviceID', 'scenario'])
@Index('cleanup', ['checkdate'])
export class InstanceEntity {
  @Column({ nullable: true })
  serviceID: number;

  @Column({ type: 'varchar', length: 64, default: 'esmc' })
  vendor: string;

  @PrimaryColumn({ length: 64 })
  service: string;

  @PrimaryColumn({ length: 64 })
  scenario: string;

  @Column({
    type: 'timestamp',
    primary: true,
    default: () => 'CURRENT_TIMESTAMP(0)',
    onUpdate: 'CURRENT_TIMESTAMP(0)',
    generatedType: 'VIRTUAL',
  })
  checkdate: Date;

  @PrimaryColumn({ length: 64 })
  instance: string;

  @Column({ type: 'enum', enum: EStatus, nullable: true })
  status: string;

  @Column({ type: 'float', nullable: true })
  duration: number;

  @Column({ length: 512, nullable: true })
  message: string;
}
