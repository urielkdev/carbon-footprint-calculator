import { ConsumptionPeriodEnum } from 'src/enums';
import { PeriodMultiplierMapper } from 'src/mappers';

export const convertPeriod = (
  value: number,
  originPeriod: ConsumptionPeriodEnum,
  targetPeriod: ConsumptionPeriodEnum = ConsumptionPeriodEnum.YEAR,
) => {
  return (
    (value * PeriodMultiplierMapper[originPeriod]) /
    PeriodMultiplierMapper[targetPeriod]
  );
};
