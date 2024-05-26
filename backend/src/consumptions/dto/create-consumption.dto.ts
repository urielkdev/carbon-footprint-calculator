import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { ConsumptionPeriodEnum, EmissionsFactorEnum } from 'src/enums';

export class CalculateConsumptionDto {
  @IsEnum(EmissionsFactorEnum)
  @IsNotEmpty()
  emissionFactor: EmissionsFactorEnum;

  @IsNumber({ allowNaN: false })
  @IsNotEmpty()
  value: number;

  @IsEnum(ConsumptionPeriodEnum)
  @IsNotEmpty()
  period: ConsumptionPeriodEnum;
}
