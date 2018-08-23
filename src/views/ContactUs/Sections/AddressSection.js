import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";

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
  const { branchName, headerColor, branchAddress, branchEmail, branchContactNumber, classes } = props;
  //   const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.section}>
      <Card>
        <CardHeader color={headerColor}>
          <h3>{branchName}</h3>
        </CardHeader>
        <CardBody>
          <h4>{branchAddress}</h4>
          <h5>
            <b><i className="fas fa-envelope-open"></i> </b> <strong>{branchEmail} </strong><br />
            <b><i className="fas fa-phone"></i> </b> <strong> {branchContactNumber}</strong>
          </h5>
        </CardBody>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  branchName: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
