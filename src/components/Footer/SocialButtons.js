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
            className={"fa fa-twitter"}
          />{" "}
          Connect with Twitter
        </Button>
        <Button color="twitter" justIcon>
          <i className={ " fa fa-twitter"} />
        </Button>
        <Button justIcon round color="twitter">
          <i
            className={"fa fa-twitter"}
          />
        </Button>
        <Button color="twitter" simple>
          <i
            className={" fa fa-twitter"}
          />
        </Button>
        <Button color="twitter" simple>
          <i
            className={" fa fa-twitter"}
          />{" "}
          Connect with Twitter
        </Button>
        <br />
        <Button color="facebook">
          <i
            className={" fa fa-facebook-square"}
          />{" "}
          Share · 2.2k
        </Button>
        <Button color="facebook" justIcon>
          <i className={ " fa fa-facebook"} />
        </Button>
        <Button justIcon round color="facebook">
          <i
            className={" fa fa-facebook"}
          />
        </Button>
        <Button color="facebook" simple>
          <i
            className={" fa fa-facebook-square"}
          />
        </Button>
        <Button color="facebook" simple>
          <i
            className={" fa fa-facebook-square"}
          />{" "}
          Share · 2.2k
        </Button>
        <br />
        <Button color="google">
          <i
            className={" fa fa-google-plus-square"}
          />{" "}
          Share on Google+
        </Button>
        <Button color="google" justIcon>
          <i className={ " fa fa-google"} />
        </Button>
        <Button justIcon round color="google">
          <i
            className={" fa fa-google"}
          />
        </Button>
        <Button color="google" simple>
          <i
            className={" fa fa-google"}
          />
        </Button>
        <Button color="google" simple>
          <i
            className={" fa fa-google-square"}
          />{" "}
          Share on Google+
        </Button>
        <br />
          <Button color="github">
            <i
              className={" fa fa-github"}
            />{" "}
            Connect with Github
          </Button>
          <Button color="github" justIcon>
            <i className={ " fa fa-github"} />
          </Button>
          <Button justIcon round color="github">
            <i
              className={" fa fa-github"}
            />
          </Button>
          <Button color="github" simple>
            <i
              className={" fa fa-github"}
            />
          </Button>
          <Button color="github" simple>
            <i
              className={" fa fa-github"}
            />{" "}
            Connect with Github
          </Button>
      </div>
    );
  }
}

export default Socials;