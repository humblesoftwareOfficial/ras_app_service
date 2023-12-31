import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ras_services' })
export class ServiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;
}
