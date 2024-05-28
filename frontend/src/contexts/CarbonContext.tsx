import React, { createContext, useContext, useState } from 'react';
import { ConsumptionPeriodEnum, EmissionsFactorEnum } from '../enums';
import { CarbonContextType, ConsumptionsType } from '../types';

export const CarbonContext = createContext<CarbonContextType | undefined>(
  undefined
);

export const useConsumptionsContext = () => {
  const context = useContext(CarbonContext);
  if (!context) {
    throw new Error(
      'useConsumptionsContext must be used within a ConsumptionsProvider'
    );
  }
  return context;
};

export const ConsumptionsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [consumptions, setConsumptions] = useState<ConsumptionsType>({});

  const setConsumptionValue = (
    emissionFactor: EmissionsFactorEnum,
    value: number
  ) => {
    setConsumptions((prevConsumptions) => ({
      ...prevConsumptions,
      [emissionFactor]: {
        emissionFactor: emissionFactor,
        value,
        period:
          prevConsumptions[emissionFactor]?.period ||
          ConsumptionPeriodEnum.MONTH,
      },
    }));
  };

  const setConsumptionPeriod = (
    emissionFactor: EmissionsFactorEnum,
    period: string
  ) => {
    setConsumptions((prevConsumptions) => ({
      ...prevConsumptions,
      [emissionFactor]: {
        emissionFactor: emissionFactor,
        value: prevConsumptions[emissionFactor]?.value || 0,
        period,
      },
    }));
  };

  return (
    <CarbonContext.Provider
      value={{ consumptions, setConsumptionValue, setConsumptionPeriod }}
    >
      {children}
    </CarbonContext.Provider>
  );
};
