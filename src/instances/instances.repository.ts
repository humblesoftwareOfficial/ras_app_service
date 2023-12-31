// Import necessary modules
import { EntityRepository, Repository } from 'typeorm';
import { InstanceEntity } from './instances.entity';

// Create a custom repository for the Item entity
@EntityRepository(InstanceEntity)
export class InstanceRepository extends Repository<InstanceEntity> {

  async getInstances(serviceID: number): Promise<any[]> {
    return this.createQueryBuilder('ras_instances')
      .select('*')
      .where('serviceID = :serviceID', { serviceID })
      .groupBy('vendor')
      .getRawMany();
  }
}
