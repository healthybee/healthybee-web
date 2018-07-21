import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Button from '../CustomButtons/Button.js';

class Socials extends React.Component{
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Button color="twitter">
          <i
            className={"fab fa-twitter"}
          />{" "}
          Connect with Twitter
        </Button>
        <Button color="twitter" justIcon>
          <i className={ " fab fa-twitter"} />
        </Button>
        <Button justIcon round color="twitter">
          <i
            className={"fab fa-twitter"}
          />
        </Button>
        <Button color="twitter" simple>
          <i
            className={" fab fa-twitter"}
          />
        </Button>
        <Button color="twitter" simple>
          <i
            className={" fab fa-twitter"}
          />{" "}
          Connect with Twitter
        </Button>
        <br />
        <Button color="facebook">
          <i
            className={" fab fa-facebook-square"}
          />{" "}
          Share · 2.2k
        </Button>
        <Button color="facebook" justIcon>
          <i className={ " fab fa-facebook"} />
        </Button>
        <Button justIcon round color="facebook">
          <i
            className={" fab fa-facebook"}
          />
        </Button>
        <Button color="facebook" simple>
          <i
            className={" fab fa-facebook-square"}
          />
        </Button>
        <Button color="facebook" simple>
          <i
            className={" fab fa-facebook-square"}
          />{" "}
          Share · 2.2k
        </Button>
        <br />
        <Button color="google">
          <i
            className={" fab fa-google-plus-square"}
          />{" "}
          Share on Google+
        </Button>
        <Button color="google" justIcon>
          <i className={ " fab fa-google"} />
        </Button>
        <Button justIcon round color="google">
          <i
            className={" fab fa-google"}
          />
        </Button>
        <Button color="google" simple>
          <i
            className={" fab fa-google"}
          />
        </Button>
        <Button color="google" simple>
          <i
            className={" fab fa-google-square"}
          />{" "}
          Share on Google+
        </Button>
        <br />
          <Button color="github">
            <i
              className={" fab fa-github"}
            />{" "}
            Connect with Github
          </Button>
          <Button color="github" justIcon>
            <i className={ " fab fa-github"} />
          </Button>
          <Button justIcon round color="github">
            <i
              className={" fab fa-github"}
            />
          </Button>
          <Button color="github" simple>
            <i
              className={" fab fa-github"}
            />
          </Button>
          <Button color="github" simple>
            <i
              className={" fab fa-github"}
            />{" "}
            Connect with Github
          </Button>
      </div>
    );
  }
}

export default Socials;