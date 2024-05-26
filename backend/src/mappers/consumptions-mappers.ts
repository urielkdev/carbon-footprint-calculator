import { ConsumptionPeriodEnum, EmissionsFactorEnum } from 'src/enums';

export const PeriodMultiplierMapper: Record<ConsumptionPeriodEnum, number> = {
  [ConsumptionPeriodEnum.DAY]: 365.0,
  [ConsumptionPeriodEnum.WEEK]: 52.0,
  [ConsumptionPeriodEnum.MONTH]: 12.0,
  [ConsumptionPeriodEnum.YEAR]: 1.0,
};

// this mapper can be in a JSON or another source in the future
// values that I couldn't find a source for, I left them with an EF of 1.0 for now
export const EmissionsFactorMapper: Record<EmissionsFactorEnum, number> = {
  // HOUSING
  [EmissionsFactorEnum.HOUSING_ELECTRICITY]: 0.7, // kWh
  [EmissionsFactorEnum.HOUSING_NATURALGAS]: 0.22, // kWh
  [EmissionsFactorEnum.HOUSING_FUEL_OIL]: 3.1, // litre
  [EmissionsFactorEnum.HOUSING_LPG]: 1.8, // litre
  [EmissionsFactorEnum.HOUSING_WASTE]: 1.0,
  [EmissionsFactorEnum.HOUSING_WATER]: 1.0,

  // TRAVEL
  [EmissionsFactorEnum.TRAVEL_VEHICLE]: 0.41, // litre
  [EmissionsFactorEnum.TRAVEL_BUS]: 0.0885, // km
  [EmissionsFactorEnum.TRAVEL_METRO]: 1.0,
  [EmissionsFactorEnum.TRAVEL_TAXI]: 0.5, // km
  [EmissionsFactorEnum.TRAVEL_RAIL]: 0.16, // km
  [EmissionsFactorEnum.TRAVEL_FLYING]: 0.22, // km

  // FOOD
  [EmissionsFactorEnum.FOOD_RED_MEAT]: 1.0,
  [EmissionsFactorEnum.FOOD_WHITE_MEAT]: 1.0,
  [EmissionsFactorEnum.FOOD_DAIRY]: 1.0,
  [EmissionsFactorEnum.FOOD_CEREALS]: 1.0,
  [EmissionsFactorEnum.FOOD_VEGETABLES]: 1.0,
  [EmissionsFactorEnum.FOOD_FRUIT]: 1.0,
  [EmissionsFactorEnum.FOOD_OILS]: 1.0,
  [EmissionsFactorEnum.FOOD_SNACKS]: 1.0,
  [EmissionsFactorEnum.FOOD_DRINKS]: 1.0,

  // PRODUCTS
  [EmissionsFactorEnum.PRODUCTS_ELECTRICAL]: 1.0,
  [EmissionsFactorEnum.PRODUCTS_HOUSEHOLD]: 1.0,
  [EmissionsFactorEnum.PRODUCTS_CLOTHES]: 1.0,
  [EmissionsFactorEnum.PRODUCTS_MEDICAL]: 1.0,
  [EmissionsFactorEnum.PRODUCTS_RECREATIONAL]: 1.0,
  [EmissionsFactorEnum.PRODUCTS_OTHER]: 1.0,

  // SERVICES
  [EmissionsFactorEnum.SERVICES_HEALTH]: 1.0,
  [EmissionsFactorEnum.SERVICES_FINANCE]: 1.0,
  [EmissionsFactorEnum.SERVICES_RECREATION]: 1.0,
  [EmissionsFactorEnum.SERVICES_EDUCATION]: 1.0,
  [EmissionsFactorEnum.SERVICES_VEHICLE]: 1.0,
  [EmissionsFactorEnum.SERVICES_COMMUNICATIONS]: 1.0,
  [EmissionsFactorEnum.SERVICES_OTHER]: 1.0,
};
