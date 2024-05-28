import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { CARDS } from '../../constants';
import { EmissionCategories } from '../../enums';
import ConsumptionCard from '../ConsumptionCard/ConsumptionCard';

interface ConsumptionPageProps {
  category: EmissionCategories;
}

const ConsumptionPage: React.FC<ConsumptionPageProps> = ({ category }) => {
  const cards = CARDS.filter((card) => card.category === category);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
      >
        <Typography variant="h4" gutterBottom>
          Calculate Your {category} Carbon Footprint
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.emissionFactor}>
              <ConsumptionCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ConsumptionPage;
