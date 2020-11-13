/*eslint-disable*/
import React from 'react';

import ReactPlayer from 'react-player';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Accordion from '../Components/Accordion/Accordion.js';
import Box from '@material-ui/core/Box';
// @material-ui/icons
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
import Button from '../../components/CustomButtons/Button.js';
// core components
import downloadStyle from '../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js';

class EventSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Box mt={4}>
                <ReactPlayer
                  url="https://youtu.be/vCerLmXZw7k"
                  controls={true}
                  width="100%"
                  height="340px"
                />
              </Box>
              <h2>Why Detox is required ?</h2>
              <h4>
                When we are eating, up to 80% of our energy is consumed in
                digestion. During a detox, the body no longer needs to digest,
                so all this saved energy is diverted into detoxification of
                toxins in your body and healing. Once detoxified, the body
                becomes lighter, more flexible, the mind becomes clearer and
                more creative.
                <br />
                <b>Note:</b> At any point in time you are not able to control
                your hunger then you can eat any seasonal fruit.
              </h4>
            </GridItem>

            <GridItem xs={12} sm={12} md={8}>
              <h2>How does it work?</h2>
              <h4>
                In this detox program, we will provide 5 delicious, immunity
                boosting juices in a day delivered to your location for 2 days.
                You don’t have to consume anything solid during these 2 days.
                Come join us and let’s get toxins out of your body!
              </h4>
            </GridItem>

            <GridItem xs={12} sm={12} md={8}>
              <h2>Benefits of Detoxification:</h2>
              <h4>
                <ul>
                  <li>Elimination of toxins from the body</li>
                  <li>Safe rapid weight loss for those who are overweight</li>
                  <li>Clearer skin</li>
                  <li>Extreme mental clarity</li>
                  <li>Greater flexibility</li>
                  <li>Tons of more energy</li>
                </ul>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <h2>What will you get in this program ?</h2>
              <h4>
                <ul>
                  <li>
                    Dietician consultation to plan meal post-detox program.
                  </li>
                  <li>
                    5 Juices a day for two days delivered to your location.
                  </li>
                  <li>DIY Detox Recipe PDF.</li>
                  <li>Detailed FAQ document.</li>
                  <li>Extend Community Support.</li>
                </ul>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <Box component="h2" display="inline">
                Program Details:
              </Box>
              <h4>
                <ul>
                  <li>
                    Program Fees:{' '}
                    <b>
                      <strike>Rs.2500</strike>
                    </b>{' '}
                    <b>Rs.2000</b>{' '}
                    <i>(Offer price 20% off on Diwali occasion)</i>
                  </li>
                  <li>
                    Program Date: <b>28th Nov to 29th Nov</b>
                  </li>
                </ul>
                <Box pl={3}>
                  <Button
                    color="warning"
                    size="md"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdGs7k79V0rvpeiNfNIm6P6x9hdSXKYn6nhC0heQ_xkNW_CYw/viewform?embedded=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    round
                  >
                    Register Now
                  </Button>
                </Box>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <h2>Frequently Asked Questions:</h2>
              <Accordion />
            </GridItem>
          </GridContainer>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(EventSection);
