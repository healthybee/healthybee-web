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
// import Button from '../../components/CustomButtons/Button.js';
import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage.js';
import TermsSection from './TermsSection.js';

class Event extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header color="primary" brand="HealthyBee" fixed {...rest} />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <TermsSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Event);
