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

// import profile from "../../assets/img/faces/christian.jpg";

import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage.js";

class MenuPaage extends React.Component {
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
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(MenuPaage);
