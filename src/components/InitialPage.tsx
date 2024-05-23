import React from 'react';
import { Typography, Button, Container, Box } from '@mui/material';

interface InitialPageProps {
  onNext: () => void;
}

const InitialPage: React.FC<InitialPageProps> = ({ onNext }) => {
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
          Welcome to the Carbon Footprint Calculator
        </Typography>
        <Button variant="contained" color="primary" onClick={onNext}>
          Start Questionnaire
        </Button>
      </Box>
    </Container>
  );
};

export default InitialPage;
