import React from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import {Icon} from "../data"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles";
import SocialFollow from "./SocialFollow";
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
    padding: "12px",
    flexDirection:'row',
    position:"static"
  },

  theContainer: {
    marginLeft: "0%", ///muti butoanele stanga, dreapta folosind marginLeft si marginRight
    padding: "0px",
    flexDirection:'row'
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
   const imgsrc = "img/Icoana.png"
    const { classes } = this.props;
    return (
      <AppBar className={classes.theMenubar} position="static">
        
          <Grid container direction='row'>
           <Grid item xs={12}>
            <img
              alt="City Guide"
              align="middle"
              height="150px"
              width="150px"
              //src="https://preview.ait-themes.club/theme/cityguide/wp-content/uploads/sites/13/logo_white.png"
              src={imgsrc}
            ></img>
            </Grid>
            <Grid item xs={12}>
          <SocialFollow/>
          </Grid>
         </Grid>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Menubar);
