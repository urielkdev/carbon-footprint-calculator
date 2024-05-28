import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { ConsumptionPeriodEnum, EmissionsFactorEnum } from 'src/enums';

export class CalculateConsumptionDto {
  @ApiProperty({ enum: EmissionsFactorEnum })
  @IsEnum(EmissionsFactorEnum)
  @IsNotEmpty()
  emissionFactor: EmissionsFactorEnum;

  @ApiProperty()
  @IsNumber({ allowNaN: false })
  @IsNotEmpty()
  @IsPositive()
  value: number;

  @ApiProperty({ enum: ConsumptionPeriodEnum })
  @IsEnum(ConsumptionPeriodEnum)
  @IsNotEmpty()
  period: ConsumptionPeriodEnum;
}

export class CalculateConsumptionsDto {
  @ApiProperty({ type: [CalculateConsumptionDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CalculateConsumptionDto)
  consumptions: CalculateConsumptionDto[];
}
