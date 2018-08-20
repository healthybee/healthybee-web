/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import Button from "../../components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "../../assets/jss/material-kit-react/components/footerStyle.js";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to={"/about-us"} className={classes.block}>
                About us
            </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to={"/contact-us"} className={classes.block}>
                Contact us
            </Link>
            </ListItem>
          </List>
        </div>

        <Tooltip
          id="facebook-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
          <Button
            justIcon
            round
            color="facebook"
            href="https://www.facebook.com/healthybee.fit"
            target="_blank">
            <i className={"fa fa-facebook"} />
          </Button>
        </Tooltip>

      <Tooltip
          id="instagram-instagram"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
        <Button
          justIcon
          round
          color="instagram"
          href="https://www.instagram.com/healthybee.fit"
          target="_blank">
          <i className={"fa fa-instagram"} />
        </Button>
      </Tooltip>

      <Tooltip
          id="google-google"
          title="Follow us on google plus"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
        <Button
          justIcon
          round
          color="google"
          href="https://plus.google.com/u/0/110856492103386293682"
          target="_blank">
          <i className={"fa fa-google-plus"} />
        </Button>
      </Tooltip>

        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , by HealthyBee.fit{" "}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
