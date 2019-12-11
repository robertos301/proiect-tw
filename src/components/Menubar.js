import React from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

import {
  IoIosHome,
  IoIosPizza,
  IoMdLocate,

  IoIosHelpCircleOutline
} from "react-icons/io";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  theButton: {
    backgroundColor: "#0088cc",
    padding: "10px",
    borderRadius: 35,
    marginLeft: "5%",
    "&:hover": {
      backgroundColor: " #80d4ff"
    }
  },

  theMenubar: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: "12px"
  },

  theContainer: {
    marginLeft: "0%", ///muti butoanele stanga, dreapta folosind marginLeft si marginRight
    padding: "0px"
  },

  theBox: {
    marginRight: "33%",
    width: "90px",
    height: "35px",
    display: "inline"
  }
});

class Menubar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.theMenubar} position="static">
        <Container className={classes.theContainer}>
          <Box className={classes.theBox}>
            <img
              alt="City Guide"
              align="middle"
              height="40px"
              width="100px"
              src="https://preview.ait-themes.club/theme/cityguide/wp-content/uploads/sites/13/logo_white.png"
            ></img>
          </Box>
          <Button className={classes.theButton}>
            {" "}
            <IoIosHome />
            Home
          </Button>
          <Button className={classes.theButton}>
            {" "}
            <IoIosPizza />
            Food
          </Button>
          <Button className={classes.theButton}>
            {" "}
            <IoMdLocate />
            Locations
          </Button>
          <Button className={classes.theButton}>
            {" "}
            <IoIosHelpCircleOutline />
            About
          </Button>
        </Container>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Menubar);
