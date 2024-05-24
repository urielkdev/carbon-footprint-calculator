import React, { createContext, useContext, useState } from 'react';

interface CarbonContextType {
  consumptions: { [key: string]: number };
  periods: { [key: string]: string };
  setConsumption: (title: string, value: number) => void;
  setPeriod: (title: string, period: string) => void;
}

const CarbonContext = createContext<CarbonContextType | undefined>(undefined);

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
  const [consumptions, setConsumptions] = useState<{ [key: string]: number }>(
    {}
  );
  const [periods, setPeriods] = useState<{ [key: string]: string }>({});

  const setConsumption = (title: string, value: number) => {
    setConsumptions((prevConsumptions) => ({
      ...prevConsumptions,
      [title]: value,
    }));
  };

  const setPeriod = (title: string, period: string) => {
    setPeriods((prevPeriods) => ({
      ...prevPeriods,
      [title]: period,
    }));
  };

  return (
    <CarbonContext.Provider
      value={{ consumptions, periods, setConsumption, setPeriod }}
    >
      {children}
    </CarbonContext.Provider>
  );
};
