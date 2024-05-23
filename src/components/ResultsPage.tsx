import React from 'react';
import { Container, Typography, Box } from '@mui/material';

interface ResultsPageProps {
  totalEmissions: number;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ totalEmissions }) => {
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
        <Typography variant="h5">
          Annual CO2 Emissions: {totalEmissions.toFixed(2)} lbs.
        </Typography>
        {/* Add more details and suggestions here */}
      </Box>
    </Container>
  );
};

export default ResultsPage;
