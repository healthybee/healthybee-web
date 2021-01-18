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
// import Button from '../../components/CustomButtons/Button.js';

//script tag
import ScriptTag from 'react-script-tag';

// core components
import downloadStyle from '../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js';

class EventSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} style={{ marginTop: '120px' }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h3>Privacy Policy</h3>
              <h4>
                <ol>
                  <li>
                    Your IP is logged when placing an order. This is for reasons
                    of fraud protection. Fraudulent orders will be submitted to
                    the appropriate authorities.
                  </li>
                  <br />
                  <li>
                    HealthyBee collects personally identifiable information that
                    you may voluntarily provide on online forms, which may
                    include: user registration, contact requests, guest
                    comments, online surveys, and other online activities. The
                    personally identifiable information (Personal Information)
                    collected on this Site / our Mobile Application can include
                    some or all of the following: your name, address, telephone
                    number, email addresses, demographic information, and any
                    other information you may voluntarily provide.
                  </li>
                  <br />
                  <li>
                    In addition to the Personal Information identified above,
                    our web servers automatically identify computers by their IP
                    addresses. Company may use IP addresses to analyze trends,
                    administer the site track users movement and gather broad
                    demographic information for aggregate use. To emphasize, IP
                    addresses are not linked to Personal.
                  </li>
                </ol>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <h3>Disclaimer</h3>
              <h4>
                <ol>
                  <li>
                    It is your own responsibility to ensure that you are fully
                    aware of all of these terms and conditions when making a
                    purchase on www.healthybee.fit / HealthyBee Mobile
                    Applications.
                  </li>
                  <br />

                  <li>
                    HealthyBee reserves the right to change / modify these terms
                    & conditions at their own discretion anytime.
                  </li>
                  <br />

                  <li>
                    The images shown are only indicative in nature & the actual
                    product may vary in size, colour etc.
                  </li>
                  <br />

                  <li>
                    HealthyBee reserves the right to change any part or piece of
                    information on this web site without any notice to customers
                    or visitors.
                  </li>
                </ol>
              </h4>
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
