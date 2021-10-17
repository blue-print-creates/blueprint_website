import * as React from 'react';
import { useTheme, Box, MobileStepper, Paper, Typography, Button} from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowLeft from '@mui/icons-material/ArrowLeft';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Cars',
    imgPath:
      'https://source.unsplash.com/1920x620/?cars',
  },
  {
    label: 'Mechanics',
    imgPath:
      'https://source.unsplash.com/1920x620/?mechanics',
  },
  {
    label: 'Tesla',
    imgPath:
      'https://source.unsplash.com/1920x620/?tesla',
  },
  {
    label: 'Ferrari',
    imgPath:
      'https://source.unsplash.com/1920x620/?ferrari',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                style={{
                  display: 'flex',
                  padding: '0%',
                  margin: '0%',
                  alignItems: 'center',
                  overflow: 'hidden',
                  backgroundColor: 'primary.light',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7],
                    }
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {/* Next */}
            {theme.direction === 'rtl' ? (
              <ArrowLeftIcon />
            ) : (
              <ArrowRightIcon />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <ArrowRightIcon />
            ) : (
              <ArrowLeft />
            )}
            {/* Back */}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;