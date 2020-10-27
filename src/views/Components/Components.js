import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import Loadable from 'react-loadable';
import Loading from '../../components/Loading/loading';
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// core components
// import Footer from '../../components/Footer/Footer.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
// import Button from "../../components/CustomButtons/Button.js";
import Parallax from '../../components/Parallax/Parallax.js';

// import Badge from "../../components/Badge/Badge.js";
// sections for this page
// import HeaderLinks from "../../components/Header/HeaderLinks.js";
// import SectionBasics from "./Sections/SectionBasics.js";
// import SectionNavbars from "./Sections/SectionNavbars.js";
// import SectionTabs from "./Sections/SectionTabs.js";
// import SectionPills from "./Sections/SectionPills.js";
// import SectionNotifications from "./Sections/SectionNotifications.js";
// import SectionTypography from "./Sections/SectionTypography.js";
// import SectionJavascript from "./Sections/SectionJavascript.js";
// import SectionCarousel from './Sections/SectionCarousel.js';
// import image from "../../assets/img/faces/avatar.jpg";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
// import SectionLogin from "./Sections/SectionLogin.js";
// import SectionExamples from "./Sections/SectionExamples.js";
// import SectionDownload from "./Sections/SectionDownload.js";
import componentsStyle from '../../assets/jss/material-kit-react/views/components.js';

const Header = Loadable({
  loader: () => import('../../components/Header/Header.js'),
  loading: Loading
});

const Footer = Loadable({
  loader: () => import('../../components/Footer/Footer.js'),
  loading: Loading
});

const Snackbar = Loadable({
  loader: () => import('../../components/Snackbar/Snackbar.js'),
  loading: Loading
});

const SectionMainOffer = Loadable({
  loader: () => import('./Sections/SectionMainOffer.js'),
  loading: Loading
});

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header brand="HealthyBee" fixed color="primary" {...rest} />
        <Parallax image={require('../../assets/img/bg4.jpeg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>
                    Eat Right. <br /> Love Yourself.
                  </h1>
                  <h3 className={classes.subtitle}>
                    Happiness starts with healthy food.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          {/* <SectionBasics /> */}
          {/* <SectionNavbars /> */}
          {/* <SectionTabs />
          <SectionPills /> */}
          {/* <SectionNotifications />
           */}
          {/* <SectionJavascript /> */}
          {/* <SectionDownload /> */}
          <SectionMainOffer />
          {/* <SectionTypography /> */}
          {/* <SectionCompletedExamples /> */}
          {/* <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem> */}
          {/* <SectionExamples /> */}
          <Snackbar />
          <div className={classes.textCenter + ' ' + classes.sharingArea} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
