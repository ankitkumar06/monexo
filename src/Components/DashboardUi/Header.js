import {Grid} from "@material-ui/core";
import React from "react";
import "../DashboardUi/dashboard.css";
import ellipse from "../../assets/images/Ellipse.png";
import ndfc from "../../assets/images/nbfc-logo.png";
import monexologo from "../../assets/images/monexo-logo.png";
import classes from "./Header.module.scss";
import { useState } from "react";

const Header = (props) => {

  
  return (
      <Grid container>
        
        <div className="header">
          <Grid container >
          <Grid item lg={5}>
              <img src={monexologo} className="monexo-logo" />
              <div className={classes.line}></div>
              <img src={ndfc} className="nbfc-logo" />
          </Grid>
          <Grid item lg={7}>
            <span className={classes.subtitle}>Hi, {props.usersName}</span>
              <img src={ellipse} className="ellipse-logo" />
          </Grid>
          </Grid>
     
        
        </div>
       
        
        </Grid>
      
   
  );
};
export default Header;
