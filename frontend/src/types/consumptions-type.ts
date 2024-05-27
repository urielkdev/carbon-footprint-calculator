import {
  ConsumptionPeriodEnum,
  EmissionCategories,
  EmissionsFactorEnum,
} from '../enums';

export type ConsumptionType = {
  emissionFactor: EmissionsFactorEnum;
  value: number;
  period: string;
};

// export type ConsumptionsType = ConsumptionType[];

export type ConsumptionsType = {
  [key: string]: ConsumptionType;
};

export type CardType = {
  title: string;
  emissionFactor: EmissionsFactorEnum;
  category: EmissionCategories;
  defaultPeriod: ConsumptionPeriodEnum;
  unit: string;
};
