import React from "react"
import {Grid,TextField,InputAdornment,Card,CardActions,CardContent,Button} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { ClassNames } from "@emotion/react";
import seachcss from "./Search.module.css"
import TabPanel from "./TabPanel"

const Search =(props)=>{
  const [value1, setValue1] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());
  const [searchval,setSearchval] = React.useState('');


  const handleChange1 = (newValue1) => {
    setValue1(newValue1);
  };
  const handleChange2 = (newValue2) => {
    setValue2(newValue2);
  };

  const searchField = (srch) =>{
    setSearchval(srch)
  }
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
     <Card  className={seachcss.main_css}>
      <CardContent>
       <TabPanel startDate={value1} endDate={value2} searchVal={searchval} />
      </CardContent>
    </Card>
     </Grid>
     </div>
    
  )
}
export default Search;