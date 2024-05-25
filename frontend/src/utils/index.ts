import { Consumptions } from '../types';

export const sumConsumptionsValues = (obj: Consumptions): number => {
  let sum = 0;
  for (const key in obj) {
    sum += obj[key].value;
  }
  return sum;
};
