import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEntity } from './service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly repository: Repository<ServiceEntity>,
  ) {}

  async findAll(): Promise<any> {
    try {
      return {
        success: true,
        data: await this.repository.find(),
      };
    } catch (error) {
      console.log({ error });
      throw new HttpException(
        `Error while getting data. Try again.`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
