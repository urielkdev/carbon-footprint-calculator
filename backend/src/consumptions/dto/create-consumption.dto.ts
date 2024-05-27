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
  @IsEnum(EmissionsFactorEnum)
  @IsNotEmpty()
  emissionFactor: EmissionsFactorEnum;

  @IsNumber({ allowNaN: false })
  @IsNotEmpty()
  @IsPositive()
  value: number;

  @IsEnum(ConsumptionPeriodEnum)
  @IsNotEmpty()
  period: ConsumptionPeriodEnum;
}

export class CalculateConsumptionsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CalculateConsumptionDto)
  consumptions: CalculateConsumptionDto[];
}
