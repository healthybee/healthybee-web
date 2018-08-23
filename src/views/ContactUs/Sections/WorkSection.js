import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import axios from 'axios';
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import workStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import CustomizedSnackbars from "../../../components/Snackbar/Snackbar.js";

class WorkSection extends React.Component {
  constructor() {
    super();
    this.state = {
      showSuccessSnackBar: false
    };

    this.submitFeedback = this.submitFeedback.bind(this);
    this.toggleSnackbar = this.toggleSnackbar.bind(this);
  }

  submitFeedback(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    };
    const url = "https://us-central1-healthybee-subscription.cloudfunctions.net/api/feedback";
    axios
      .post(url, JSON.stringify(data))
      .then(response => {
        if (response) {
          document.getElementById('feedbackForm').reset();
          this.setState({ showSuccessSnackBar: true });
        }
      })
      .catch(error => {
        // this.clearForm(event);
        console.log(error);
      });
  }

  toggleSnackbar() {
    const { showSuccessSnackBar } = this.state;
    this.setState({ showSuccessSnackBar: !showSuccessSnackBar });
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
            <form onSubmit={this.submitFeedback} id="feedbackForm" name="feedbackForm">
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
                <GridContainer>
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
        <CustomizedSnackbars
          showSuccessSnackBar={this.state.showSuccessSnackBar}
          toggleSnackbar={this.toggleSnackbar} 
          />
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
