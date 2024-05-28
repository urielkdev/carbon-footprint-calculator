import { fireEvent, render, screen } from '@testing-library/react';
import { CATEGORIES } from '../../constants';
import App from './App';

// For the frontend I decided not to spend too much time testing
// and focus on other things. But I did some to show that I know

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Carbon Footprint Calculator');
  expect(linkElement).toBeInTheDocument();
});

// Mock components to avoid rendering their real implementation
jest.mock(
  '../ConsumptionPage/ConsumptionPage',
  () =>
    ({ category }: { category: string }) =>
      <div>{category} Page</div>
);
jest.mock('../ResultsPage/ResultsPage', () => () => <div>ResultsPage</div>);

describe('App component | Stepper', () => {
  test('renders the correct step content based on activeStep', () => {
    render(<App />);

    // Initial step
    expect(screen.getByText('Start Questionnaire')).toBeInTheDocument();

    CATEGORIES.forEach((category) => {
      // Move to next category step
      fireEvent.click(
        screen.getByRole('button', { name: /start|next|finish/i })
      );
      expect(screen.getByText(`${category} Page`)).toBeInTheDocument();
    });

    // Move to Results step
    fireEvent.click(screen.getByRole('button', { name: /start|next|finish/i }));
    expect(screen.getByText('ResultsPage')).toBeInTheDocument();
  });

  test('the handleNext and handleBack', () => {
    render(<App />);

    // Initial step
    expect(screen.getByText('Start Questionnaire')).toBeInTheDocument();

    // handleNext
    fireEvent.click(screen.getByRole('button', { name: /start|next|finish/i }));
    fireEvent.click(screen.getByRole('button', { name: /start|next|finish/i }));

    // handleBack
    fireEvent.click(screen.getByRole('button', { name: /back/i }));
    fireEvent.click(screen.getByRole('button', { name: /back/i }));

    // Initial step
    expect(screen.getByText('Start Questionnaire')).toBeInTheDocument();
  });
});

// Test the
