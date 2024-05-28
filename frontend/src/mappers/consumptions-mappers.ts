import { EmissionsFactorEnum } from '../enums';

export const EmissionsFactorTitleMapper: Record<EmissionsFactorEnum, string> = {
  // HOUSING
  [EmissionsFactorEnum.HOUSING_ELECTRICITY]: 'Electricity',
  [EmissionsFactorEnum.HOUSING_NATURAL_GAS]: 'Natural Gas',
  [EmissionsFactorEnum.HOUSING_FUEL_OIL]: 'Fuel Oil',
  [EmissionsFactorEnum.HOUSING_LPG]: 'LPG',
  [EmissionsFactorEnum.HOUSING_WASTE]: 'Waste',
  [EmissionsFactorEnum.HOUSING_WATER]: 'Water',

  // TRAVEL
  [EmissionsFactorEnum.TRAVEL_VEHICLE]: 'Vehicle',
  [EmissionsFactorEnum.TRAVEL_BUS]: 'Bus',
  [EmissionsFactorEnum.TRAVEL_METRO]: 'Metro',
  [EmissionsFactorEnum.TRAVEL_TAXI]: 'Taxo',
  [EmissionsFactorEnum.TRAVEL_RAIL]: 'Rail',
  [EmissionsFactorEnum.TRAVEL_FLYING]: 'Flight',

  // FOOD
  [EmissionsFactorEnum.FOOD_RED_MEAT]: 'Red Meat',
  [EmissionsFactorEnum.FOOD_WHITE_MEAT]: 'White Meat',
  [EmissionsFactorEnum.FOOD_DAIRY]: 'Dairy',
  [EmissionsFactorEnum.FOOD_CEREALS]: 'Cereals',
  [EmissionsFactorEnum.FOOD_VEGETABLES]: 'Vegetables',
  [EmissionsFactorEnum.FOOD_FRUIT]: 'Fruits',
  [EmissionsFactorEnum.FOOD_OILS]: 'Oils',
  [EmissionsFactorEnum.FOOD_SNACKS]: 'Snacks',
  [EmissionsFactorEnum.FOOD_DRINKS]: 'Drinks',

  // PRODUCTS
  [EmissionsFactorEnum.PRODUCTS_ELECTRICAL]: 'Electrical Products',
  [EmissionsFactorEnum.PRODUCTS_HOUSEHOLD]: 'Household Products',
  [EmissionsFactorEnum.PRODUCTS_CLOTHES]: 'Clothes',
  [EmissionsFactorEnum.PRODUCTS_MEDICAL]: 'Medical Products',
  [EmissionsFactorEnum.PRODUCTS_RECREATIONAL]: 'Recreational Products',
  [EmissionsFactorEnum.PRODUCTS_OTHER]: 'Other Products',

  // SERVICES
  [EmissionsFactorEnum.SERVICES_HEALTH]: 'Health',
  [EmissionsFactorEnum.SERVICES_FINANCE]: 'Finance',
  [EmissionsFactorEnum.SERVICES_RECREATION]: 'Recreation',
  [EmissionsFactorEnum.SERVICES_EDUCATION]: 'Education',
  [EmissionsFactorEnum.SERVICES_VEHICLE]: 'Vehicle Services',
  [EmissionsFactorEnum.SERVICES_COMMUNICATIONS]: 'Communications Services',
  [EmissionsFactorEnum.SERVICES_OTHER]: 'Other Services',
};
