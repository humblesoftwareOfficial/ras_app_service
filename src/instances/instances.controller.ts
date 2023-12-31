import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InstanceService } from './instances.service';
import { GetInstancesDto } from './instances.dto';

@Controller('instances')
export class InstanceController {
  constructor(private readonly service: InstanceService) {}
  @Post('')
  getInstances(@Body() value: GetInstancesDto) {
    return this.service.getInstances(value);
  }
}
