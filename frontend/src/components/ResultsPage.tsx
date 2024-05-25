import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useCarbonContext } from '../contexts/CarbonContext';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { COLORS } from '../constants';
import { sumConsumptionsValues } from '../utils';

const ResultsPage: React.FC = () => {
  const { consumptions } = useCarbonContext();

  // TODO: calculate within a backend api the totalEmissions
  // and consumption for each category to put in the chart
  const totalEmissions = sumConsumptionsValues(consumptions);

  // TODO: change this
  const data = Object.keys(consumptions).map((key) => ({
    name: key,
    value: consumptions[key].value,
  }));

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="70vh"
      >
        <Typography variant="h4" gutterBottom>
          Your Carbon Footprint Results
        </Typography>
        <Typography variant="h5" gutterBottom>
          Annual CO2 Emissions: {totalEmissions.toFixed(2)} kg CO2e/yr.
        </Typography>
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx={250}
            cy={250}
            labelLine={false}
            label={({ name, percent }: any) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Box>
    </Container>
  );
};

export default ResultsPage;
