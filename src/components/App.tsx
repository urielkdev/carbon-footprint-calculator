import React, { useState } from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
} from '@mui/material';
import InitialPage from './InitialPage';
import FoodPage from './FoodPage';
import TravelPage from './TravelPage';
import ResultsPage from './ResultsPage';

const App: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [totalEmissions, setTotalEmissions] = useState(0);

  const steps = ['Start', 'Food Consumption', 'Travel Consumption', 'Results'];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <InitialPage onNext={handleNext} />;
      case 1:
        return <FoodPage onNext={handleNext} />;
      case 2:
        return <TravelPage onNext={handleNext} />;
      case 3:
        return <ResultsPage totalEmissions={totalEmissions} />;
      default:
        return <InitialPage onNext={handleNext} />;
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Carbon Footprint Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box my={4} width="100%">
            {getStepContent(activeStep)}
          </Box>
          <Box display="flex" justifyContent="space-between" width="100%">
            {activeStep > 0 && (
              <Button onClick={handleBack} style={{ marginRight: 8 }}>
                Back
              </Button>
            )}
            {activeStep > 0 && activeStep < steps.length - 1 && (
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 2 ? 'Finish' : 'Next'}
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default App;
