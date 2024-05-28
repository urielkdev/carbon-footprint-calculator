import { render, screen } from '@testing-library/react';
import React from 'react';
import { ConsumptionsProvider } from '../../contexts/CarbonContext';
import {
  ConsumptionPeriodEnum,
  EmissionCategories,
  EmissionsFactorEnum,
} from '../../enums';
import { CardType } from '../../types';
import ConsumptionCard from './ConsumptionCard';

const mockCard: CardType = {
  title: 'Electricity Consumption',
  category: EmissionCategories.HOUSING,
  emissionFactor: EmissionsFactorEnum.HOUSING_ELECTRICITY,
  defaultPeriod: ConsumptionPeriodEnum.MONTH,
  unit: 'kWh',
};

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<ConsumptionsProvider>{ui}</ConsumptionsProvider>);
};

describe('ConsumptionCard component', () => {
  test('renders correctly with given card data', () => {
    renderWithProvider(<ConsumptionCard card={mockCard} />);

    expect(screen.getByText('Electricity Consumption')).toBeInTheDocument();
    expect(screen.getByLabelText('Consumption (kWh)')).toBeInTheDocument();
    expect(screen.getByLabelText('Period')).toBeInTheDocument();
  });

  // test('handles consumption value change', () => {
  //   renderWithProvider(<ConsumptionCard card={mockCard} />);

  //   const input = screen.getByLabelText('Consumption (kWh)');
  //   fireEvent.change(input, { target: { value: 200 } });

  //   expect(input.value).toBe('200');
  // });

  // test('handles period change', () => {
  //   renderWithProvider(<ConsumptionCard card={mockCard} />);

  //   const select = screen.getByLabelText('Period');
  //   fireEvent.mouseDown(select);
  //   const listbox = screen.getByRole('listbox');
  //   fireEvent.click(screen.getByText('Year'));

  //   expect(mockSetConsumptionPeriod).toHaveBeenCalledWith(
  //     EmissionsFactorEnum.HOUSING_ELECTRICITY,
  //     ConsumptionPeriodEnum.YEAR
  //   );
  // });
});
