import React from "react";
import classes from "./CustomerDetails.module.css";
import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    Link
    ,Card,CardActions,CardContent
  } from "@material-ui/core";
  import ButtonBase from '@mui/material/ButtonBase';
  import { styled } from '@mui/material/styles';
  import image from "../../assets/images/Ellipse.png";
  import Header from "../DashboardUi/Header";
  import { Fragment } from 'react';
  import TabPanel from './TabPanel.js';
  import { createTheme, ThemeProvider } from '@material-ui/core/styles';
  import green from '@material-ui/core/colors/green';
  
 


const CustomerDetails = (props) =>{


    const theme = createTheme({
        overrides : {
          MuiButton : {
            root : {
           // apply your style here 
          }
        },
        palette: {
          primary: {
             main:green,
         }
       },
      }});


    return(
<<<<<<< HEAD
    <div className={classes.header2}>
    <Grid container >
=======
        <Fragment>
            <Grid container><Header usersName={props.usersName} /></Grid>
             
    <Grid container className={classes.shadow_grid} >
>>>>>>> 9b10bda (UI chnages credit details)
        <Grid item xs={12} sm container>
          <Grid item xs container direction="row" className={classes.cust_info_rectangle}>
            <Grid item xs >
                <img className={classes.img} alt="complex" src={image} />        
            </Grid>
                <Grid item xs direction="column">
                    <div  className={classes.customer_ID}>
                         Customer ID
                    </div>
                    <div className={classes.cust_head_value}>
                          CID-000312377
                    </div>                      
                </Grid>
                <Grid item xs direction="column">   
                    <div className={classes.cust_name}>
                          Customer Name
                    </div>
                    <div className={classes.cust_name_value}>
                            Theresa
                    </div>      
                </Grid>
                <Grid item xs direction="column">
                    <div className={classes.app_number}>
                         Application Number
                    </div>
                    <div className={classes.app_number_value}>
                         55889924
                    </div>           
                </Grid>
                <Grid item xs direction="column">  
                    <div className={classes.load_app_ID}>
                    Loan Application ID
                    </div>
                    <div className={classes.load_app_ID_value}>
                        LAP-000312549
                    </div>         
                </Grid>
          </Grid>
        </Grid>
      </Grid>

<Grid container className={classes.maintabcss}>
<Grid  className={classes.papercss} container >
     <Card  className={classes.main_css} >
   
      <CardContent>
      <ThemeProvider theme={theme}>
      </ThemeProvider>
      <TabPanel ></TabPanel>
      </CardContent>
    </Card>
     </Grid>
</Grid>

        </Fragment>
    );
}
export default CustomerDetails;
