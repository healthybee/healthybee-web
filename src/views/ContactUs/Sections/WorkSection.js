import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import axios from 'axios';
import workStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";


class WorkSection extends React.Component {
constructor() {
  super();
  this.submitFeedback = this.submitFeedback.bind(this);
}

submitFeedback(event) {
  event.preventDefault();
  const data = {
    name: event.currentTarget.name.value,
    email: event.currentTarget.email.value,
    message: event.currentTarget.message.value
  }
  axios
    .post('url', data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  
  console.log('handle submit feedback called', event);
}
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Get in touch</h2>
            <h4 className={classes.description}>
              If you want to know more about us or want to get in touch, please feel free to write us.
            </h4>
            <form onSubmit={this.submitFeedback} name="feedbackForm">
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    name="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      required: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    name="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      required: true,
                      type: "email"
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  name="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    required: true
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="warning" type="submit">Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
