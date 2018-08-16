import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import Button from "../../components/CustomButtons/Button.js";
// import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.js";
import AddressSection from './Sections/AddressSection.js';
// Sections for this page
// import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

class LandingPage extends React.Component {
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
        <Parallax filter image={require("../../assets/img/food/beverages-brunch-cocktail.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Want to meet us.</h1>
                <h4>
                  If you have anything to discuss or just have to hang out with us, please
                  write us an email given below or give a call or send us your message. We would
                  love to hear from you.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container} >
            <h4 className={classes.title}>Branches</h4>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <AddressSection
                  branchName="HealthyBee, Wakad."
                  branchAddress="Inside Silver Sports Club, Behind Vedanta Society, Shankar Kalat Nagar, Wakad, Pune - 411057"
                  branchEmail="healthybee.fit@gmail.com"
                  branchContactNumber="+91-92847 40370" />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <AddressSection
                  branchName="HealthyBee, Baner."
                  branchAddress="Shop no. 6,  Alacrity commercial complex, Behind Bitwise Terra Tower, By pass road, Pune - 411045"
                  branchEmail="healthybee.fit@gmail.com"
                  branchContactNumber="+91-99756 90709" />
              </GridItem>
            </GridContainer>
            <WorkSection />
            {/* <ProductSection />
            <TeamSection /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
