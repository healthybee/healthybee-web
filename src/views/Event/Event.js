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
// import Button from "../../components/CustomButtons/Button.js";
import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage.js';
import EventSection from './EventSection.js';

class Event extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    console.log('history', this.props);
    return (
      <div>
        <Header color="primary" brand="HealthyBee" fixed {...rest} />

        <Parallax
          filter
          image={require('../../assets/img/food/pexels-event.jpg')}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>2 Day Detox Program</h1>
                <h3> We consume nothing but fresh juices for 2 days.</h3>
                <h3> </h3>
                <h4>Coming Soon ..., please call us for more information .</h4>
                <h4>Mobile No: +91-99756 90709.</h4>

                <br />
              </GridItem>
            </GridContainer>
          </div>
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
