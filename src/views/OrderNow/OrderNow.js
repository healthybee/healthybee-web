import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
// import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.js";

class OrderNow extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="primary"
          brand="HealthyBee"
          fixed
          {...rest} />

        <Parallax small filter image={require("../../assets/img/food/beach-hat-cactus-plant-delicious.jpeg")}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem>
                <Button
                  color="warning"
                  href="https://www.swiggy.com/pune/healthybee-baner-baner"
                  target="_blank"
                  round
                  size="lg">
                  Order Online
                  </Button>
                <Button
                  color="warning"
                  href="https://www.swiggy.com/pune/healthybee-baner-baner"
                  target="_blank"
                  round
                  size="lg">
                  Order Online
                  </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(OrderNow);
