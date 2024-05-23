import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import ConsumptionCard from './ConsumptionCard';

interface FoodPageProps {
  onNext: () => void;
}

const FoodPage: React.FC<FoodPageProps> = ({ onNext }) => {
  const cardTitles = ['Meat', 'Vegetables', 'Dairy', 'Snacks'];

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
          Calculate Your Food Carbon Footprint
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

export default FoodPage;
