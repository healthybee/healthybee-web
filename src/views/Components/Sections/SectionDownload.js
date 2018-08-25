/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
// core components
import downloadStyle from "../../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

class SectionDownload extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2><i className="fas fa-map-marker-alt" /> {" "}Choose your nearest location</h2>
              <h4>
              Some days you just don’t want to move from the couch. We get it.
              Simply order in with one of our delivery partner.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button
                color="warning"
                size="lg"
                href="https://www.swiggy.com/pune/healthybe-wakad-wakad"
                target="_blank"
              >
                Wakad
              </Button>
              <Button
                color="primary"
                size="lg"
                href="https://www.swiggy.com/pune/healthybee-baner-baner"
                target="_blank"
              >
                Baner
              </Button>
            </GridItem>
          </GridContainer>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(SectionDownload);
