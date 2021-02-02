/*eslint-disable*/
import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import GridContainer from '../../../components/Grid/GridContainer.js';
import GridItem from '../../../components/Grid/GridItem.js';
// import Button from "../../../components/CustomButtons/Button.js";
import AddressSection from './AddressSection.js';
import FeedbackForm from './FeedbackSection.js';
// core components
import downloadStyle from '../../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js';

class ContactSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Find us at your nearest place</h2>
              <br />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={8} md={6}>
              <AddressSection
                branchName="HealthyBee, Wakad."
                branchAddress="Inside Silver Sports Club, Behind Vedanta Society, Shankar Kalat Nagar, Wakad, Pune - 411057"
                branchTime="9:00AM-9:00PM"
                branchEmail="healthybee.fit.wakad@gmail.com"
                branchContactNumber="+91-99756 90709"
                headerColor="warning"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <AddressSection
                branchName="HealthyBee, Baner."
                branchAddress="Shop no. 6,  Alacrity commercial complex, Behind Bitwise Terra Tower, By pass road, Pune - 411045"
                branchTime="9:00AM-9:00PM"
                branchEmail="healthybee.fit@gmail.com"
                branchContactNumber="+91-99756 90709"
                headerColor="warning"
              />
            </GridItem>
          </GridContainer>
          <FeedbackForm />
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(ContactSection);
