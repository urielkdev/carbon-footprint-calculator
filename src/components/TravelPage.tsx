import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import ConsumptionCard from './ConsumptionCard';

interface TravelPageProps {
  onNext: () => void;
}

const TravelPage: React.FC<TravelPageProps> = ({ onNext }) => {
  const cardTitles = ['Car', 'Bus', 'Train', 'Flight'];

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
          Calculate Your Travel Carbon Footprint
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {cardTitles.map((title) => (
            <Grid item xs={12} sm={6} md={3} key={title}>
              <ConsumptionCard title={title} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TravelPage;
