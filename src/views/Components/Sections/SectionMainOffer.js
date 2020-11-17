/*eslint-disable*/
import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import GridContainer from '../../../components/Grid/GridContainer.js';
import GridItem from '../../../components/Grid/GridItem.js';
import Button from '../../../components/CustomButtons/Button.js';
import Badge from '../../../components/Badge/Badge.js';
// core components
import mainOfferStyle from '../../../assets/jss/material-kit-react/views/componentsSections/mainOfferStyle';
import OfferModal from '../Modals/OfferModal.js';

class SectionMainOffer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer
            className={classes.textCenter}
            justify="center"
            xs={12}
            sm={12}
            md={12}
          >
            <GridItem xs={12} sm={4} md={4} spacing={10}>
              <h3>Delivery @ Doorsteps</h3>
              <h4>Stay indoor, Stay safe</h4>
              <OfferModal
                btntext={'Order Online'}
                isDisable={false}
                redirectUrl={'/delivery'}
                modalType={'onlineplatform'}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} spacing={10}>
              <h3>Detox Program</h3>
              <h4>Let's get toxin out of your body.</h4>
              <OfferModal
                btntext={'Get Started'}
                isDisable={false}
                redirectUrl={'/fitness-programs'}
                modalType={''}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} spacing={10}>
              <h3>Personalise subscription</h3>
              <h4>Diet Plan | Meals | Delivery | Report</h4>
              <OfferModal
                btntext={'Subscribe Now'}
                isDisable={false}
                redirectUrl={'/subscribe'}
                modalType={'comingsoon'}
              />
            </GridItem>
          </GridContainer>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withStyles(mainOfferStyle)(SectionMainOffer);
