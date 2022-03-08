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



const Search =(props)=>{
  const [value1, setValue1] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());
  const [searchval,setSearchval] = React.useState("");


  const handleChange1 = (newValue1) => {
    setValue1(newValue1);
  };
  const handleChange2 = (newValue2) => {
    setValue2(newValue2);
  };

  const searchField = (event) =>{
    let item = event.target.value;
    console.log(item)
    setSearchval(item)
    // if(item.length > 3)
    // {
    //   props.fetchCustomerDataHandler
    // }
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

  return(
    
    
    <div>
      
    <Grid className="searchMain" container >

      <Grid item md={4}>
       <p className="Applicationtxt">Loan Application's</p>
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
          inputFormat="MM/dd/yyyy"
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
          inputFormat="MM/dd/yyyy"
          renderInput={(params) => <TextField  {...params} />}
          value={value2}
          onChange={handleChange2}
        />
      </Stack>
    </LocalizationProvider>
    </div>
      </Grid>
  
    </Grid>
    <Grid item className={seachcss.horizon_line}></Grid>
     <Grid item className={seachcss.papercss} container >
     <Card  className={seachcss.main_css} >
   
      <CardContent>
      <ThemeProvider theme={theme}>
      </ThemeProvider>
       <TabPanel startDate={value1} endDate={value2} searchVal={searchval}  />
      </CardContent>
    </Card>
     </Grid>
     </div>
    
  )
}
export default Search;