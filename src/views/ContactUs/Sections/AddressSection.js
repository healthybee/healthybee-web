import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { branchName, branchAddress, branchEmail, branchContactNumber } = props;
  //   const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Typography variant="headline" component="h3">
        {branchName}
      </Typography>
      <Typography component="p">
        {branchAddress}<br />
        <br />
      </Typography>
      <Typography component="p">
        <b><i class="fas fa-envelope-open"></i> </b>{branchEmail} <br />
        <b><i class="fas fa-phone"></i> </b> {branchContactNumber}
      </Typography>
    </div>
  );
}

SimpleCard.propTypes = {
  branchName: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
