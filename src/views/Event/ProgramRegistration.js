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
// import Button from "../../components/CustomButtons/Button.js";
import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage.js';

class Event extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    console.log('history', this.props);
    return (
      <div>
        <Header color="primary" brand="HealthyBee" fixed {...rest} />

        <Parallax
          filter
          small
          image={require('../../assets/img/food/pexels-event.jpg')}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdGs7k79V0rvpeiNfNIm6P6x9hdSXKYn6nhC0heQ_xkNW_CYw/viewform?embedded=true"
            width="800"
            height="1405"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="program registration form"
          >
            Loading…
          </iframe>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Event);
