import classes from './CreditBureauDetail.module.css'

import {
    Grid,
    Box,
    Item

  } from "@material-ui/core";

const CreditBureauDetail = () =>{

    return(
        <div>
      <Grid container >  
      <Grid item className={classes.HeadingName}>Credit Bureau Details</Grid></Grid>
      <Grid item className={classes.horizon_line}></Grid>
      <Grid container  className={classes.HeadingData} >
        <Grid  container item xs={6} >
        <Grid item xs={6} className={classes.label_css}>
          <Grid>label0</Grid>
        </Grid>
        <Grid item xs={6}class={classes.label_value_css}>
          <Grid>api/teleservice/cerdit-beaure-details /api/teleservice/cerdit-beaure- details/api/teleservice/ cerdit-beaure-details/</Grid>
        </Grid>
        </Grid>

        <Grid  container item xs={6} >
        <Grid item xs={6} className={classes.label_css}>
          <Grid>label1</Grid>
        </Grid>
        <Grid item xs={6}class={classes.label_value_css}>
          <Grid>api/teleservice/cerdit-beaure-details/</Grid>
        </Grid>
        </Grid>

      </Grid>
    </div>
    )

}

export default CreditBureauDetail;