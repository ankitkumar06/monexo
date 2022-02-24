import {Grid} from "@material-ui/core";
import React from "react";
import "../DashboardUi/dashboard.css";
import ellipse from "../../assets/images/Ellipse.png";
import ndfc from "../../assets/images/nbfc-logo.png";
import monexologo from "../../assets/images/monexo-logo.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
      <Grid container>
        
        <div className="header">
          <Grid>
          <Grid item sm={5}>
              <img src={monexologo} className="monexo-logo" />
              <div className={classes.line}></div>
              <img src={ndfc} className="nbfc-logo" />
          </Grid>
          <Grid item sm={7}>
              <img src={ellipse} className="ellipse-logo" />
          </Grid>
          </Grid>
     
        
        </div>
       
        
        </Grid>
      
   
  );
};
export default Header;
