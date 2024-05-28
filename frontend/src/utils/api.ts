import {
  ApiCalculateConsumptionsCompleteResType,
  ConsumptionsType,
} from '../types';

// TODO: chante to a env
const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

const calculateConsumptions = async (data: ConsumptionsType) => {
  const body = buildBody(data);

  const response = await fetch(`${BASE_URL}/consumptions`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result as ApiCalculateConsumptionsCompleteResType;
};

const buildBody = (data: ConsumptionsType) => {
  const transformedConsumptions = Object.entries(data).map(
    ([key, consumption]) => ({
      emissionFactor: key,
      value: consumption.value,
      period: consumption.period,
    })
  );

  return {
    consumptions: transformedConsumptions,
  };
};

export const api = {
  calculateConsumptions,
};
