import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
// import Button from "../../components/CustomButtons/Button.js";
// import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from '../../components/Parallax/Parallax.js';
import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage.js';
// Sections for this page
// import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";
import ContactSection from './Sections/ContactSection.js';

const dashboardRoutes = [];

class ContactUsPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="primary"
          routes={dashboardRoutes}
          brand="HealthyBee"
          // rightLinks={<HeaderLinks />}
          fixed
          {...rest}
        />
        <Parallax
          filter
          image={require('../../assets/img/food/Fruit_Custard.jpg')}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Want to meet us.</h1>
                <h4>
                  If you have anything to discuss or just have to hang out with
                  us, please write us an email given below or give a call or
                  send us your message. We would love to hear from you.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.section}>
            <div className={classes.container}>
              {/* <ProductSection />
            <TeamSection /> */}
            </div>
          </div>
        </div>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <ContactSection />
          {/* <WorkSection /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(ContactUsPage);
