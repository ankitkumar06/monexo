import {Grid} from "@material-ui/core";
import React from "react";
import "../DashboardUi/dashboard.css";
import ellipse from "../../assets/images/avtar.png";
import ndfc from "../../assets/images/nbfc-logo.png";
import monexologo from "../../assets/images/monexo-logo.png";
import classes from "./Header.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import CallIcon from '@mui/icons-material/Call';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const auth = useSelector((state)=>state.authRedux.userName)
  const navigate = useNavigate();

  const logoutHandler = () =>{
    console.log("logout")
    localStorage.clear();
    navigate('/')
  }
  
  return (
      <Grid container>
        
        <div className="header">
          <Grid container>
          <Grid item lg={5}>
              <img src={monexologo} className="monexo-logo" />
              <div className={classes.line}></div>
              <img src={ndfc} className="nbfc-logo" />
          </Grid>
          <Grid item lg={7}>
            <span className={classes.subtitle}>Hi, {auth}</span>
              <img src={ellipse} className={classes.ellipse_logo_new} />

              <Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px',left:'810px'}}startIcon={<LogoutIcon />} onClick={logoutHandler}></Button>
          </Grid>
          </Grid>
     
        
        </div>
       
        
        </Grid>
      
   
  );
};
export default Header;
