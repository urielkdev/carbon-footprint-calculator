import { EmissionsFactorEnum } from '../enums';

export type ApiCalculateConsumptionsResType = {
  emissionFactor: EmissionsFactorEnum;
  value: number;
  period: string;
  emissions: number;
};

export type ApiCalculateConsumptionsCompleteResType = {
  consumptions: ApiCalculateConsumptionsResType[];
  totalEmissions: number;
};
