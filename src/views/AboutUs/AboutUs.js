import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Parallax from "../../components/Parallax/Parallax.js";
import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage.js";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="primary"
          brand="HealthyBee"
          fixed
          {...rest}/>

        <Parallax small filter image={require("../../assets/img/food/beach-hat-cactus-plant-delicious.jpeg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <div className={classes.description}>
                <h2 className={classes.title}>Our Story Starts Health.</h2>
                <h4>
                  At HealthyBee, our mission is to serve healthy food every day.
  We provide the inspirational, hygienic food need to make healthy eating a way of life.
  Our specially designed menu offers delicious recipes, balanced nutritional diet plans, and new ways to make healthy cuisine choices more exciting.
  We are about moderation and balance—not strict rules or fad diets—because for healthy eating to become a way of life,
it should be accessible, sustainable, inspiring and—above all—delicious.{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
