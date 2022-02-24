import React from "react";
import classes from "./CustomerDetails.module.css";
import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    Link,
  } from "@material-ui/core";
  import ButtonBase from '@mui/material/ButtonBase';
  import { styled } from '@mui/material/styles';
  import image from "../../assets/images/Ellipse.png";


const CustomerDetails = () =>{
    return(
        <div>
    <Grid container >
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

        </div>
    );
}
export default CustomerDetails;