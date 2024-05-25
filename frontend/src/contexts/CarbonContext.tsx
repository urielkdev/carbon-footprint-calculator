import React, { createContext, useContext, useState } from 'react';
import {
  CarbonContext as CarbonContextInterface,
  Consumptions,
} from '../types';

const CarbonContext = createContext<CarbonContextInterface | undefined>(
  undefined
);

export const useCarbonContext = () => {
  const context = useContext(CarbonContext);
  if (!context) {
    throw new Error('useCarbonContext must be used within a CarbonProvider');
  }
  return context;
};

// TODO: change the 'any'
export const CarbonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [consumptions, setConsumptions] = useState<Consumptions>({});

  const setConsumptionValue = (title: string, value: number) => {
    setConsumptions((prevConsumptions) => ({
      ...prevConsumptions,
      [title]: { ...prevConsumptions[title], value },
    }));
  };

  const setConsumptionPeriod = (title: string, period: string) => {
    setConsumptions((prevConsumptions) => ({
      ...prevConsumptions,
      [title]: { ...prevConsumptions[title], period },
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
