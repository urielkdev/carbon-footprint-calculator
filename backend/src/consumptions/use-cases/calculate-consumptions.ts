import { EmissionsFactorMapper } from 'src/mappers';
import { convertPeriod } from 'src/utils';

import { CalculateConsumptionDto } from '../dto/create-consumption.dto';

export const calculateConsumptionsUseCase = ({
  emissionFactor,
  value,
  period,
}: CalculateConsumptionDto) => {
  return convertPeriod(value * EmissionsFactorMapper[emissionFactor], period);
};
