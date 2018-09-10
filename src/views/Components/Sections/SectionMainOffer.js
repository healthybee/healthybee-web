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
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>
                Get <b> 10% </b> Discount on <i className="fas fa-utensils" />{' '}
                Dine In.
              </h2>
              <h4>
                Use promo code <strong>Today</strong> at our outlets to get
                offer.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <OfferModal />
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