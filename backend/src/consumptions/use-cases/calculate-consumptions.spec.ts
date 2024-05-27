import { calculateConsumptionsUseCase } from './calculate-consumptions';
import { ConsumptionPeriodEnum, EmissionsFactorEnum } from 'src/enums';

import {
  CalculateConsumptionDto,
  CalculateConsumptionsDto,
} from '../dto/create-consumption.dto';

jest.mock('src/mappers', () => {
  return {
    EmissionsFactorMapper: {
      housingElectricity: 1.2,
      housingNaturalGas: 2.4,
    },
  };
});

jest.mock('src/utils', () => ({
  convertPeriod: jest.fn((value, _) => value),
}));

describe('calculateConsumptionsUseCase', () => {
  it('should calculate emissions correctly for given consumptions', () => {
    const consumptions: CalculateConsumptionDto[] = [
      {
        emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
        value: 100,
        period: ConsumptionPeriodEnum.YEAR,
      },
      {
        emissionFactor: EmissionsFactorEnum.HOUSING_NATURAL_GAS,
        value: 200,
        period: ConsumptionPeriodEnum.YEAR,
      },
    ];

    const dto: CalculateConsumptionsDto = { consumptions };

    const result = calculateConsumptionsUseCase(dto);

    expect(result.consumptions).toHaveLength(consumptions.length);

    expect(result.consumptions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...consumptions[0],
          emissions: 120,
        }),
        expect.objectContaining({
          ...consumptions[1],
          emissions: 480,
        }),
      ]),
    );

    expect(result.totalEmissions).toBe(600);
  });

  it('should handle empty consumptions array', () => {
    const dto: CalculateConsumptionsDto = { consumptions: [] };

    const result = calculateConsumptionsUseCase(dto);

    expect(result.consumptions).toHaveLength(0);
    expect(result.totalEmissions).toBe(0);
  });

  it('should calculate emissions correctly for given consumptions', () => {
    const consumptions: CalculateConsumptionDto[] = [
      {
        emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
        value: 100.123,
        period: ConsumptionPeriodEnum.YEAR,
      },
      {
        emissionFactor: EmissionsFactorEnum.HOUSING_NATURAL_GAS,
        value: 200.456,
        period: ConsumptionPeriodEnum.YEAR,
      },
    ];

    const dto: CalculateConsumptionsDto = { consumptions };

    const result = calculateConsumptionsUseCase(dto);

    expect(result.consumptions).toHaveLength(consumptions.length);

    expect(result.consumptions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...consumptions[0],
          emissions: 120.15,
        }),
        expect.objectContaining({
          ...consumptions[1],
          emissions: 481.09,
        }),
      ]),
    );

    expect(result.totalEmissions).toBe(601.24);
  });
});
