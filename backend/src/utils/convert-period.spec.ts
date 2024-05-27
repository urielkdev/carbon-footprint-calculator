import { convertPeriod } from './convert-period';
import { ConsumptionPeriodEnum } from 'src/enums';

jest.mock('src/mappers', () => {
  return {
    PeriodMultiplierMapper: {
      day: 365.0,
      week: 52.0,
      month: 12.0,
      year: 1.0,
    },
  };
});

describe('convertPeriod', () => {
  it('should convert value from {originPeriod} to {targetPeriod}', () => {
    const value = 10;
    const originPeriod = ConsumptionPeriodEnum.MONTH;
    const targetPeriod = ConsumptionPeriodEnum.YEAR;

    const result = convertPeriod(value, originPeriod, targetPeriod);

    expect(result).toBeCloseTo(120);
  });

  it('should convert value when {originPeriod} < {targetPeriod}', () => {
    const value = 120;
    const originPeriod = ConsumptionPeriodEnum.YEAR;
    const targetPeriod = ConsumptionPeriodEnum.MONTH;

    const result = convertPeriod(value, originPeriod, targetPeriod);

    expect(result).toBeCloseTo(10);
  });

  it('should return the same value when {originPeriod} and {targetPeriod} are equal', () => {
    const value = 10;
    const period = ConsumptionPeriodEnum.MONTH;

    const result = convertPeriod(value, period, period);

    expect(result).toEqual(10);
  });

  it('should handle default target period as year', () => {
    const value = 10;
    const originPeriod = ConsumptionPeriodEnum.MONTH;

    const result = convertPeriod(value, originPeriod);

    expect(result).toBeCloseTo(120);
  });
});
