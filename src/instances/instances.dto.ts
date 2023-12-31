import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, Min } from 'class-validator';
import { EInstanceIntervalTime } from './instances.helper';

export class GetInstancesDto {
  @Type(() => Number)
  @Min(1)
  serviceID: number;

  @IsEnum(EInstanceIntervalTime, {
    message: 'Unit must be a valid EInstanceIntervalTime.',
  })
  interval: EInstanceIntervalTime;

  @IsOptional()
  @IsNotEmpty({ message: "app name cannot be empty" })
  scenario: string;
}
