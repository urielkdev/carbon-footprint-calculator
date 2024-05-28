import {
  ConsumptionPeriodEnum,
  EmissionCategories,
  EmissionsFactorEnum,
} from '../enums';
import { EmissionsFactorTitleMapper } from '../mappers';
import { CardType } from '../types';

// TODO: Easly change with card will be shown to users
export const CARDS: CardType[] = [
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.HOUSING_ELECTRICITY],
    emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
    category: EmissionCategories.HOUSING,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'kWh',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.HOUSING_NATURAL_GAS],
    emissionFactor: EmissionsFactorEnum.HOUSING_NATURAL_GAS,
    category: EmissionCategories.HOUSING,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'kWh',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.HOUSING_FUEL_OIL],
    emissionFactor: EmissionsFactorEnum.HOUSING_FUEL_OIL,
    category: EmissionCategories.HOUSING,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'litre',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.HOUSING_LPG],
    emissionFactor: EmissionsFactorEnum.HOUSING_LPG,
    category: EmissionCategories.HOUSING,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'unit',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.HOUSING_WASTE],
    emissionFactor: EmissionsFactorEnum.HOUSING_WASTE,
    category: EmissionCategories.HOUSING,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'kg',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.HOUSING_WATER],
    emissionFactor: EmissionsFactorEnum.HOUSING_WATER,
    category: EmissionCategories.HOUSING,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'kg',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.TRAVEL_VEHICLE],
    emissionFactor: EmissionsFactorEnum.TRAVEL_VEHICLE,
    category: EmissionCategories.TRAVEL,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'litre',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.TRAVEL_BUS],
    emissionFactor: EmissionsFactorEnum.TRAVEL_BUS,
    category: EmissionCategories.TRAVEL,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'km',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.TRAVEL_METRO],
    emissionFactor: EmissionsFactorEnum.TRAVEL_METRO,
    category: EmissionCategories.TRAVEL,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'km',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.TRAVEL_TAXI],
    emissionFactor: EmissionsFactorEnum.TRAVEL_TAXI,
    category: EmissionCategories.TRAVEL,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'km',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.TRAVEL_RAIL],
    emissionFactor: EmissionsFactorEnum.TRAVEL_RAIL,
    category: EmissionCategories.TRAVEL,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'km',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.TRAVEL_FLYING],
    emissionFactor: EmissionsFactorEnum.TRAVEL_FLYING,
    category: EmissionCategories.TRAVEL,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'km',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.TRAVEL_FLYING],
    emissionFactor: EmissionsFactorEnum.TRAVEL_FLYING,
    category: EmissionCategories.TRAVEL,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'km',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.FOOD_RED_MEAT],
    emissionFactor: EmissionsFactorEnum.FOOD_RED_MEAT,
    category: EmissionCategories.FOOD,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'kg',
  },
  {
    title: EmissionsFactorTitleMapper[EmissionsFactorEnum.FOOD_WHITE_MEAT],
    emissionFactor: EmissionsFactorEnum.FOOD_WHITE_MEAT,
    category: EmissionCategories.FOOD,
    defaultPeriod: ConsumptionPeriodEnum.MONTH,
    unit: 'kg',
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
