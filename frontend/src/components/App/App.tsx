import {
  AppBar,
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { CATEGORIES } from '../../constants';
import { EmissionCategories } from '../../enums';
import ConsumptionPage from '../ConsumptionPage/ConsumptionPage';
import InitialPage from '../InitialPage/InitialPage';
import ResultsPage from '../ResultsPage/ResultsPage';

const App: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Start', ...CATEGORIES, 'Results'];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const getStepContent = (step: number) => {
    const stepName = steps[step] as EmissionCategories;

    // If the step is a valid category,
    // we render the generic page for this category
    // that way its easier to create more pages in the future
    if (Object.values(EmissionCategories).includes(stepName)) {
      return <ConsumptionPage key={stepName} category={stepName} />;
    }

    switch (step) {
      case steps.length - 1:
        return <ResultsPage />;
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
          {/* TODO: improve accessibility */}
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
