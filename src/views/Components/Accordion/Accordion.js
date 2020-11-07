import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            I am on medication ? Can I Join detox program ?{' '}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you are currently on medication, it is required that you consult
            with your medical doctor prior to committing to the detox program.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Can a diabetic patient fast ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, detoxification is a powerful tool for diabetic patient. However
            if you are on medication, it is required that you consult with your
            medical doctor prior to committing to the detox program. If you join
            us for this program, please request for juices without fruit and
            coconut water. We recommend to consume only vegetable juices only.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            What age groups can do the online juice fast ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Even though detoxing is beneficial for all age groups, we allow only
            people below the age of 45 to participate in this program. This is
            because we are not able to provide the personalised support and
            handholding that may be required for elderly people who tend to face
            more detox symptoms.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Can I fast during my periods ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, it is safe to fast during your menstrual cycles.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Can I do the fast if I am underweight ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, a 3 day fast is very beneficial for people who are looking to
            gain healthy weight. People who are underweight do not need more
            food, but a better capacity to digest and assimilate their food. The
            fast will increase the digestive fire and allow the person to gain
            healthy weight once the fast is broken and simple satvic food is
            consumed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Do you wash fruits & vegetables ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we soaking them in plain water for 20 minutes before using
            them.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>
            I have registered for the detox program, but I did not receive a
            confirmation ?{' '}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Kindly check your spam folder as sometimes the emails may not reach
            your inbox. However if you are still not able to find it, please
            reach out to us through our website{' '}
            <a href="www.healthybee.fit">www.healthybee.fit</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
