import { render, screen } from '@testing-library/react';
import { CARDS } from '../../constants';
import { EmissionCategories } from '../../enums';
import ConsumptionPage from './ConsumptionPage';

// For the frontend I decided not to spend too much time testing
// and focus on other things. But I did some to show that I know

// Mocking the ConsumptionCard component
jest.mock(
  '../ConsumptionCard/ConsumptionCard',
  () =>
    ({ card }: { card: { emissionFactor: string } }) =>
      <div data-testid="consumption-card">{card.emissionFactor}</div>
);

describe('ConsumptionPage component', () => {
  test('renders the correct set of cards for a category', () => {
    const category = EmissionCategories.HOUSING;
    render(<ConsumptionPage category={category} />);

    const housingCards = CARDS.filter((card) => card.category === category);

    expect(
      screen.getByText(`Calculate Your ${category} Carbon Footprint`)
    ).toBeInTheDocument();
    const renderedCards = screen.getAllByTestId('consumption-card');
    expect(renderedCards).toHaveLength(housingCards.length);

    housingCards.forEach((card, index) => {
      expect(renderedCards[index]).toHaveTextContent(card.emissionFactor);
    });
  });
});
