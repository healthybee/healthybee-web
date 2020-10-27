import React from 'react';
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from "@material-ui/core/DialogActions";
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
// core components
import axios from 'axios';
import GridContainer from '../../../components/Grid/GridContainer.js';
import GridItem from '../../../components/Grid/GridItem.js';
import CustomInput from '../../../components/CustomInput/CustomInput.js';
import Button from '../../../components/CustomButtons/Button.js';
import modalStyle from '../../../assets/jss/material-kit-react/modalStyle.js';
import CustomizedSnackbars from '../../../components/Snackbar/Snackbar.js';
import { BASE_API } from '../../../Config/constants';
import { Link } from 'react-router-dom';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.sendOfferEmail = this.sendOfferEmail.bind(this);
    this.toggleSnackbar = this.toggleSnackbar.bind(this);
  }

  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }

  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }

  sendOfferEmail(event) {
    event.preventDefault();
    const data = {
      email: event.target.subscriberEmail.value
    };
    const url = `${BASE_API}/offers/subscriber`;
    axios
      .post(url, data)
      .then(response => {
        if (response) {
          document.getElementById('mainOfferForm').reset();
          this.handleClose('modal');
          this.setState({ showSuccessSnackBar: true });
        }
      })
      .catch(error => {
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
      <div>
        <Link to={'/event'}>
          <Button color="warning" size="lg" round>
            Get Started
          </Button>
        </Link>

        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose('modal')}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="default"
              onClick={() => this.handleClose('modal')}
            >
              <Close className={classes.modalClose} />
            </IconButton>
          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}
          >
            <h5>We will send your promo code on your email </h5>
            <form
              onSubmit={this.sendOfferEmail}
              id="mainOfferForm"
              name="mainOfferForm"
            >
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Your Email"
                    id="subscriberEmail"
                    name="subscriberEmail"
                    formControlProps={{
                      fullWidth: true,
                      required: true
                    }}
                  />
                </GridItem>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.textCenter}
                  >
                    <Button color="warning" type="submit">
                      Send Message
                    </Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </DialogContent>
        </Dialog>
        <CustomizedSnackbars
          successMessage="Thank You, Offer code sent on your email id."
          showSuccessSnackBar={this.state.showSuccessSnackBar}
          toggleSnackbar={this.toggleSnackbar}
        />
      </div>
    );
  }
}

export default withStyles(modalStyle)(Modal);
