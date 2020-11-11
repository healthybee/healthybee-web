import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
//import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '../../../components/CustomButtons/Button.js';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const buttonstyle = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  }
}));

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle
      disableTypography
      className={classes.root.center}
      {...other}
    >
      <Typography variant="h6" align="center">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

export default function CustomizedDialogs() {
  const classes = buttonstyle();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button color="warning" size="lg" round onClick={handleClickOpen}>
        Order Online
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title">Order Food From</DialogTitle>
        <DialogContent dividers>
          <Button
            href="https://www.swiggy.com/restaurants/healthybee-wakad-pune-55633"
            autoFocus
            onClick={handleClose}
            color="warning"
            className={classes.root}
            target="_blank"
          >
            Swiggy
          </Button>
          <Button
            href="https://www.zomato.com/pune/restaurants/healthybee?category=2"
            autoFocus
            onClick={handleClose}
            color="warning"
            className={classes.root}
            target="_blank"
          >
            Zomato
          </Button>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
