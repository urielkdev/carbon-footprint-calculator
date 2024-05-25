export interface Consumption {
  value: number;
  period: string;
}

export interface Consumptions {
  [key: string]: Consumption;
}

export interface CarbonContext {
  consumptions: Consumptions;
  setConsumptionValue: (title: string, value: number) => void;
  setConsumptionPeriod: (title: string, period: string) => void;
}
