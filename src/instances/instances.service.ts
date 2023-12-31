import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { InstanceEntity } from './instances.entity';
import { groupByAttributes } from 'src/utils';
import { GetInstancesDto } from './instances.dto';
import { getTimeInterval } from './instances.helper';

@Injectable()
export class InstanceService {
  constructor(
    @InjectRepository(InstanceEntity)
    private readonly repository: Repository<InstanceEntity>,
  ) {}

  async getInstances(filter: GetInstancesDto): Promise<any> {
    try {
      const interval = getTimeInterval(filter.interval);
      const result = await this.repository.find({
        where: {
          serviceID: Number(filter.serviceID),
          checkdate: Between(interval.startDate, interval.endDate),
          ...(filter.scenario?.length && {
            scenario: filter.scenario,
          })
        },
      });

      if (!result?.length) {
        return {
          success: true,
          data: [],
        };
      }

      return {
        success: true,
        data: this.__formatResultInstances(result),
      };
    } catch (error) {
      console.log({ error });
      throw new HttpException(
        `Error while getting data. Try again.`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  __formatResultInstances(data: InstanceEntity[]) {
    const groupedData = groupByAttributes(data, 'scenario');
    const resultArray = Object.entries(groupedData).map(([key, value]) => ({
      name: key,
      tests: (value as Array<any>).reverse() //(value as Array<any>).concat(value).reverse(), //
    }));

    return resultArray;
  }
}
