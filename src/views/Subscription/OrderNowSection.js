import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// @material-ui/icons
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
import StepContent from '@material-ui/core/StepContent';
import Button from '../../components/CustomButtons/Button.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '90%'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 1
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

function getSteps() {
  return ['Select your meal plan', 'Fill basic details', 'Make Payment'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `;
    case 1:
      return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `;
    case 2:
      return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => {
                  return (
                    <Step key={label}>
                      <h3>{label}</h3>
                      <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                          <div>
                            <Button
                              color="warning"
                              disabled={activeStep === 0}
                              onClick={this.handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={this.handleNext}
                              className={classes.button}
                            >
                              {activeStep === steps.length - 1
                                ? 'Finish'
                                : 'Next'}
                            </Button>
                          </div>
                        </div>
                      </StepContent>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                  <Typography>All steps completed - Thank you!</Typography>
                  <Button onClick={this.handleReset} className={classes.button}>
                    See Again
                  </Button>
                </Paper>
              )}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
