import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InstanceService } from './instances.service';
import { InstanceController } from './instances.controller';
import { InstanceEntity } from './instances.entity';
import { InstanceRepository } from './instances.repository';

@Module({
  providers: [InstanceService],
  controllers: [InstanceController],
  imports: [TypeOrmModule.forFeature([InstanceEntity])],
})
export class InstanceModule {}
