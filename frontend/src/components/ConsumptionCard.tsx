import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import { useCarbonContext } from '../contexts/CarbonContext';

interface ConsumptionCardProps {
  title: string;
}

const ConsumptionCard: React.FC<ConsumptionCardProps> = ({ title }) => {
  const { consumptions, setConsumptionValue, setConsumptionPeriod } =
    useCarbonContext();

  console.log(consumptions);

  const consumptionValue = consumptions[title]?.value || 0;
  const consumptionPeriod = consumptions[title]?.period || 'day';

  const handleConsumptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setConsumptionValue(title, value);
  };

  const handlePeriodChange = (e: SelectChangeEvent<any>) => {
    setConsumptionPeriod(title, e.target.value as string);
  };

  return (
    <Card style={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <TextField
          label="Consumption (kCal)"
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
            <MenuItem value="day">Day</MenuItem>
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="year">Year</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default ConsumptionCard;
