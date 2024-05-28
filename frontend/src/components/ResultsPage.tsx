import { Box, Container, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { CHART_COLORS } from '../constants';
import { useCarbonContext } from '../contexts/CarbonContext';
import { EmissionsFactorTitleMapper } from '../mappers';
import { ApiCalculateConsumptionsResType } from '../types';
import { api } from '../utils';

const ResultsPage: React.FC = () => {
  const { consumptions } = useCarbonContext();

  const [calculatedConsumptions, setCalculatedConsumptions] = useState<
    ApiCalculateConsumptionsResType[]
  >([]);
  const [totalEmissions, setTotalEmissions] = useState<number>(0);

  const fetchDatas = useCallback(async () => {
    try {
      const response = await api.calculateConsumptions(consumptions);

      setCalculatedConsumptions(response.consumptions);
      setTotalEmissions(response.totalEmissions);
    } catch (error) {
      // TODO: show an alert with the error
    }
  }, [consumptions]);

  useEffect(() => {
    fetchDatas();
  }, [fetchDatas]);

  const data = calculatedConsumptions.map(({ emissionFactor, emissions }) => ({
    name: EmissionsFactorTitleMapper[emissionFactor],
    value: emissions,
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
        {/* change to chart of material ui */}
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
                fill={CHART_COLORS[index % CHART_COLORS.length]}
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
