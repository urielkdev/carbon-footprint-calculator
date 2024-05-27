import { EmissionsFactorMapper } from 'src/mappers';
import { convertPeriod } from 'src/utils';

import {
  CalculateConsumptionDto,
  CalculateConsumptionsDto,
} from '../dto/create-consumption.dto';

export const calculateConsumptionsUseCase = ({
  consumptions,
}: CalculateConsumptionsDto) => {
  const calculatedConsumptions = consumptions.map(calculateConsumption);

  return {
    consumptions: calculatedConsumptions,
    totalEmissions: +sumEmissions(calculatedConsumptions).toFixed(2),
  };
};

const calculateConsumption = (consumption: CalculateConsumptionDto) => {
  const { emissionFactor, value, period } = consumption;

  const emissions = +convertPeriod(
    value * EmissionsFactorMapper[emissionFactor],
    period,
  ).toFixed(2);

  return {
    ...consumption,
    emissions,
  };
};

const sumEmissions = (consumptions: { emissions: number }[]) => {
  return consumptions.reduce((acc, { emissions }) => acc + emissions, 0);
};
