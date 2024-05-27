import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useCarbonContext } from '../contexts/CarbonContext';
import { CardType } from '../types';

interface ConsumptionCardProps {
  card: CardType;
}

const ConsumptionCard: React.FC<ConsumptionCardProps> = ({ card }) => {
  const { consumptions, setConsumptionValue, setConsumptionPeriod } =
    useCarbonContext();

  const { title, emissionFactor, defaultPeriod, unit } = card;
  console.log(consumptions);

  const consumptionValue = consumptions[emissionFactor]?.value || 0;
  const consumptionPeriod =
    consumptions[emissionFactor]?.period || defaultPeriod;

  const handleConsumptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setConsumptionValue(emissionFactor, value);
  };

  const handlePeriodChange = (e: SelectChangeEvent<any>) => {
    setConsumptionPeriod(emissionFactor, e.target.value as string);
  };

  return (
    <Card style={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <TextField
          label={`Consumption (${unit ? unit : 'unit'})`}
          type="number"
          value={consumptionValue}
          onChange={handleConsumptionChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="period-select-label">Period</InputLabel>
          <Select
            labelId="period-select-label"
            value={consumptionPeriod}
            onChange={(e: SelectChangeEvent<any>) => handlePeriodChange(e)}
            label="Period"
          >
            {/* TODO: Change this to iterate the ConsumptionPeriodMapper */}
            <MenuItem value="day">Day</MenuItem>
            <MenuItem value="week">Week</MenuItem>
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="year">Year</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default ConsumptionCard;
