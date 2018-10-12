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
import SectionDownload from './OrderNowSection.js';

class OrderNow extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header color="primary" brand="HealthyBee" fixed {...rest} />

        <Parallax
          filter
          image={require('../../assets/img/food/beach-hat-cactus-plant-delicious.jpeg')}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>
                  Work hard in silence, let your success be your noise.
                </h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.typo}>
              <div className={classes.note}>Header 1</div>
              <h3 style={{ color: '#424242' }}>
                Help us by providing your preferences so that we can prepare
                better meal options.
              </h3>
            </div>
          </div>
          <SectionDownload />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(OrderNow);
