import { Controller, Get } from '@nestjs/common';
import { ServiceService, } from './service.service';

@Controller('services')
export class ServiceController {
  constructor(private readonly service: ServiceService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
