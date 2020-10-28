/*eslint-disable*/
import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
import Button from '../../components/CustomButtons/Button.js';
// core components
import downloadStyle from '../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js';

class EventSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>How does it work?</h2>
              <h4>
                In this detox program, we will provide 5 Delicious, immunity
                boosting juices in a day delivered to your location for 2 days.
                You don’t have to consume anything solid during these 2 days.
                Apart from Juices we delivery you can drink water. Come join us
                and let’s get toxins out of your body!
              </h4>
            </GridItem>

            <GridItem xs={12} sm={12} md={8}>
              <h2>Why Detox is required?</h2>
              <h4>
                When we are eating, up to 80% of our energy is consumed in
                digestion. During a detox, the body no longer needs to digest,
                so all this saved energy is diverted into detoxification of
                toxins in your body and healing. Once detoxified, the body
                becomes lighter, more flexible, the mind becomes clearer and
                more creative.
                <br />
                <b>Note:</b> At any point in time you are not able to control
                your hunger then you can eat any seasonal fruit.
              </h4>
            </GridItem>

            <GridItem xs={12} sm={12} md={8} justify="none">
              <h2>Benefits of Detoxification:</h2>
              <h4>
                <ul>
                  <li>Elimination of toxins from the body</li>
                  <li>Saferapid weight loss for those who are overweight</li>
                  <li>Clearer skin</li>
                  <li>Extreme mental clarity </li>
                  <li>Greater flexibility</li>
                  <li>Tons of more </li>
                </ul>
              </h4>
            </GridItem>
          </GridContainer>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(EventSection);