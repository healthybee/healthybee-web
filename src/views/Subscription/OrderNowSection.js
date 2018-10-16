// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// // @material-ui/icons
// // import GridContainer from '../../components/Grid/GridContainer.js';
// // import GridItem from '../../components/Grid/GridItem.js';
// // import StepContent from '@material-ui/core/StepContent';
// //
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '../../components/CustomButtons/Button.js';
import Typography from '@material-ui/core/Typography';
// import GridContainer from '../../components/Grid/GridContainer.js';
// import GridItem from '../../components/Grid/GridItem.js';
// import CustomInput from '../../components/CustomInput/CustomInput.js';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import BasicDetails from './BasicDetails';

const styles = theme => ({
  root: {},
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  connectorActive: {
    '& $line': {
      borderColor: theme.palette.secondary.main
    }
  },
  connectorCompleted: {
    '& $line': {
      borderColor: theme.palette.primary.main
    }
  },
  line: {
    color: 'green'
  }
});
const setp0 = <BasicDetails />;

function getSteps() {
  return ['Select your preferences', 'Personal details', 'Delivery address'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return setp0;
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

class CustomizedStepper extends React.Component {
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
    const { activeStep } = this.state;
    const steps = getSteps();

    return (
      <div className={classes.root}>
        <Stepper
          activeStep={activeStep}
          connector={
            <StepConnector
              classes={{
                // active: classes.connectorActive,
                // completed: classes.connectorCompleted,
                line: classes.line
              }}
            />
          }
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>
                <h5>{label}</h5>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&quot;re finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep)}
              <div>
                <Button
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
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

CustomizedStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(CustomizedStepper);
