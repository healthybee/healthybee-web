import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// core components
import Header from '../../components/Header/Header.js';
import { Container } from '@material-ui/core';
//import Footer from '../../components/Footer/Footer.js';
// import HeaderLinks from "../../components/Header/HeaderLinks.js";
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage.js';

class Event extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header color="primary" brand="HealthyBee" fixed {...rest} />
        <Container>
          <GridContainer
            direction="row"
            justify="flex-end"
            alignItems="flex-start"
          >
            <GridItem xs={12} sm={12} md={6}>
              <h4>Coming Soon ... please call us for more information .</h4>
              <h4>Mobile No: +91-99756 90709.</h4>
            </GridItem>
          </GridContainer>
        </Container>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Event);
