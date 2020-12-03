import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// core components
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
// import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from '../../components/Parallax/Parallax.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
import Button from '../../components/CustomButtons/Button.js';
import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage.js';
import EventSection from './EventSection.js';
import { Container } from '@material-ui/core';

//script tag
import ScriptTag from 'react-script-tag';

class Event extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header color="primary" brand="HealthyBee" fixed {...rest} />

        <Parallax image={require('../../assets/img/detox-program.jpg')}>
          <Container>
            <GridContainer
              direction="row"
              justify="flex-end"
              alignItems="flex-start"
            >
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.headingTxt}>2 Days Detox Program</h1>
                <h3 className={classes.subHeadingTxt}>
                  {' '}
                  We give fresh juices for 2 days.
                </h3>
                {/* <h4>Coming Soon ... please call us for more information .</h4> */}
                {/* <h4>Mobile No: +91-8793580502.</h4> */}
                {/* <Button
                  color="warning"
                  size="md"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdGs7k79V0rvpeiNfNIm6P6x9hdSXKYn6nhC0heQ_xkNW_CYw/viewform?embedded=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  round
                >
                  Register Now
                </Button> */}
                <form>
                  <ScriptTag
                    src="https://checkout.razorpay.com/v1/payment-button.js"
                    data-payment_button_id="pl_G3N2KZhR0c7D5V"
                  >
                    {' '}
                  </ScriptTag>{' '}
                </form>
              </GridItem>
            </GridContainer>
          </Container>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <EventSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Event);
