import {
  ConsumptionPeriodEnum,
  EmissionCategories,
  EmissionsFactorEnum,
} from '../enums';
import { CardType } from '../types';

// TODO: add more cards here
export const CARDS: CardType[] = [
  {
    title: 'Electricity',
    emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
    category: EmissionCategories.HOUSING,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'kWh',
  },
  {
    title: 'Natural Gas',
    emissionFactor: EmissionsFactorEnum.HOUSING_NATURAL_GAS,
    category: EmissionCategories.HOUSING,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'kWh',
  },
  {
    title: 'Vehicle',
    emissionFactor: EmissionsFactorEnum.TRAVEL_VEHICLE,
    category: EmissionCategories.TRAVEL,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'km',
  },
];

export const CATEGORIES: EmissionCategories[] = Array.from(
  new Set(CARDS.map(({ category }) => category))
);

export const CHART_COLORS = [
  '#1f77b4 ',
  '#ff7f0e ',
  '#FFBB28',
  '#2ca02c ',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf',
  '#aec7e8',
  '#ffbb78',
];
