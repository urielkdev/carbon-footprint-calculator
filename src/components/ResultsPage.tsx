import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useCarbonContext } from '../context/CarbonContext';

interface ResultsPageProps {}

// TODO: change this to a types or const file
const COLORS = [
  '#1f77b4 ',
  '#ff7f0e ',
  '#FFBB28',
  '#2ca02c ',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf',
  '#aec7e8',
  '#ffbb78',
];

// TODO: change this
function sumValues(obj: { [key: string]: number }): number {
  let sum = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      sum += obj[key];
    }
  }
  return sum;
}

const ResultsPage: React.FC<ResultsPageProps> = () => {
  const { consumptions } = useCarbonContext();

  // TODO: calculate within a backend api the totalEmissions
  // and consumption for each category to put in the chart
  const totalEmissions = sumValues(consumptions);

  // TODO: change this
  const data = Object.keys(consumptions).map((key) => ({
    name: key,
    value: consumptions[key],
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
          Annual CO2 Emissions: {totalEmissions.toFixed(2)} lbs.
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
