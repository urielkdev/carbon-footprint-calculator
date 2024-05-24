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
} from '@mui/material';
import { useCarbonContext } from '../context/CarbonContext';

interface ConsumptionCardProps {
  title: string;
}

const ConsumptionCard: React.FC<ConsumptionCardProps> = ({ title }) => {
  const { consumptions, periods, setConsumption, setPeriod } =
    useCarbonContext();

  const consumption = consumptions[title] || '';
  const period = periods[title] || 'day';

  const handleConsumptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setConsumption(title, value);
  };

  const handlePeriodChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setPeriod(title, e.target.value as string);
  };

  return (
    <Card style={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <TextField
          label="Consumption (kCal)"
          type="number"
          value={consumption}
          onChange={handleConsumptionChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="period-select-label">Period</InputLabel>
          <Select
            labelId="period-select-label"
            value={period}
            onChange={(e: any) => handlePeriodChange(e)}
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
