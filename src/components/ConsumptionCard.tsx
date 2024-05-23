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

interface ConsumptionCardProps {
  title: string;
}

const ConsumptionCard: React.FC<ConsumptionCardProps> = ({ title }) => {
  const [consumption, setConsumption] = React.useState<number | string>('');
  const [period, setPeriod] = React.useState<string>('day');

  return (
    <Card style={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <TextField
          label="Consumption (kCal)"
          type="number"
          value={consumption}
          onChange={(e) => setConsumption(e.target.value)}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="period-select-label">Period</InputLabel>
          <Select
            labelId="period-select-label"
            value={period}
            onChange={(e) => setPeriod(e.target.value as string)}
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
