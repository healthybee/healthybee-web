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
import GridContainer from '../../../components/Grid/GridContainer.js';
import GridItem from '../../../components/Grid/GridItem.js';
import CustomInput from '../../../components/CustomInput/CustomInput.js';
import Button from '../../../components/CustomButtons/Button.js';

import modalStyle from '../../../assets/jss/material-kit-react/modalStyle.js';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
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
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          color="warning"
          size="lg"
          round
          onClick={() => this.handleClickOpen('modal')}
        >
          Get Promo Code
        </Button>
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
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Your Email"
                    id="regular"
                    formControlProps={{
                      fullWidth: true
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
                    <Button color="warning">Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(Modal);
