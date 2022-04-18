import React from "react"
import {Grid,TextField,InputAdornment,Card,CardActions,CardContent} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { ClassNames } from "@emotion/react";
import seachcss from "./Search.module.css"
import TabPanel from "./TabPanel"
import DownloadIcon from '@mui/icons-material/Download';
// import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import CallIcon from '@mui/icons-material/Call';
import Button from '@mui/material/Button';
import { useState,useEffect } from "react";
import axios from 'axios';
import env from '../../enviorment.json';




const Search =(props)=>{
  let today = new Date();
  // today.setDate(today.getDate() - 10);
  const [value1, setValue1] = React.useState(Date.now() - 10 * 24 * 60 * 60 * 1000);
  const [value2, setValue2] = React.useState(new Date());
  const [searchval,setSearchval] = React.useState("");
  const [searchvalToCall,setSearchvalToCall] = React.useState("");
  const ParentFunc = React.useRef(null)
  const [singleData, setSingledata] = useState([]);


  const handleChange1 = (newValue1) => {
  //  let startdate  = newValue1.getFullYear() + "-" +newValue1.getDate() + "-"+newValue1.getMonth() ;
    setValue1(newValue1);
  };
  const handleChange2 = (newValue2) => {
    // let endDate = newValue2.getFullYear() + "-" +newValue2.getDate() + "-"+newValue2.getMonth() ;
    setValue2(newValue2);
  };

  const searchField = (event) =>{
    let item = event.target.value;
    console.log(item)
    setSearchval(item)
    var key = event.keyCode || event.charCode;

    // if( key == 8 || key == 46 )
    // {
      if(item.length == 0)
      {
        setSearchvalToCall(item)
      }
    // }
    if(item.length > 3)
    {
      // childFunc.current()
      setSearchvalToCall(item)

    }
  }
  
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
  // useEffect(() =>{
//     let today = new Date();
// today.setDate(today.getDate() - 10);
// let date = new Date(today).toLocaleDateString("de");
//     setValue2()

  // },[])


  return(
    
    
    <div>
      
    <Grid className="searchMain" container >

      <Grid item md={4}>
       <p className="Applicationtxt">Loan Application</p>
      </Grid>
      <Grid item md={4}>
        <div className="Searchtag">
      <TextField
      
      className="Searchbar"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" className="Searchicon" >
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                   placeholder="Search User ID, Application ID"   
                   value={searchval}
                   onChange={searchField}
                />
                </div>
      </Grid>
      <Grid item md={2}>
        <div className="searchdate">
      <LocalizationProvider dateAdapter={AdapterDateFns}  >
      <Stack   className="dateadjust">

        <DesktopDatePicker 
          inputFormat="dd/MM/yyyy"
          renderInput={(params) => <TextField  {...params} />}
          value={value1}
          onChange={handleChange1}
        />
      </Stack>
    </LocalizationProvider>
    </div>
      </Grid>
      <Grid item md={2}>
        <div className="searchdate2">
      <LocalizationProvider dateAdapter={AdapterDateFns}  >
      <Stack   className="dateadjust2">

        <DesktopDatePicker 
          inputFormat="dd/MM/yyyy"
          renderInput={(params) => <TextField  {...params} />}
          value={value2}
          onChange={handleChange2}
        />
      </Stack>
    </LocalizationProvider>
    </div>
      </Grid>
  
    </Grid>
    <Grid md={12} item className={seachcss.horizon_line}></Grid>
     <Grid item className={seachcss.papercss} container >
       {/* <Grid item container spacing={0}
  direction="column"
  alignItems="center"
  justify="center">
    <Grid xs={14}> */}
     <Card  className={seachcss.main_css} >
   
      <CardContent>
      <ThemeProvider theme={theme}>
      </ThemeProvider>
       <TabPanel startDate={value1} endDate={value2} searchVal={searchvalToCall} ParentFunc={singleData} />
      </CardContent>
    </Card>
    {/* </Grid>
    </Grid> */}
     </Grid>
     </div>
    
  )
}
export default Search;