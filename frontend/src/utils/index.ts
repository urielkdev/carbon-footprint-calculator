import { ConsumptionsType } from '../types';

export const sumConsumptionsValues = (obj: ConsumptionsType): number => {
  let sum = 0;
  for (const key in obj) {
    sum += obj[key].value;
  }
  return sum;
};
