import { Button } from "@material-ui/core";
import React from "react";
import SignIn from "./SignIn";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
    isSignUp: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {
        <React.Fragment key={"right"}>
          <Button
            onClick={toggleDrawer("right", true)}
            color="inherit"
            variant="outlined"
          >
            Sign In
          </Button>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            <SignIn isSignUp={state.isSignUp} />
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}
