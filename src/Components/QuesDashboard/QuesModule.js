import React from "react"
import {Grid,TextField,InputAdornment,Card,CardActions,CardContent} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { ClassNames } from "@emotion/react";
import seachcss from "../DashboardUi/Search.module.css"
import QTabPanel from "./QTabPanel"
import DownloadIcon from '@mui/icons-material/Download';
import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';




const QuesModule =(props)=>{
 

  return(
    
    
    <div>
      
    <Grid className="searchMain" container >

     
    
     <Grid item className={seachcss.papercss} container >
     <Card  className={seachcss.main_css} >
   
      <CardContent>
      <ThemeProvider >
      </ThemeProvider>
       <QTabPanel  />
      </CardContent>
    </Card>
     </Grid>
     </Grid>

     </div>
    
  )
}
export default QuesModule;