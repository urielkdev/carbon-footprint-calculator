import { EmissionsFactorEnum } from '../enums';
import { ConsumptionsType } from './';

export type CarbonContextType = {
  consumptions: ConsumptionsType;
  setConsumptionValue: (
    emissionFactor: EmissionsFactorEnum,
    value: number
  ) => void;
  setConsumptionPeriod: (
    emissionFactor: EmissionsFactorEnum,
    period: string
  ) => void;
};
