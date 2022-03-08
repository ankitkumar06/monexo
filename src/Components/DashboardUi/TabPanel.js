import * as React  from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange, pink, green } from "@material-ui/core/colors";
import EnhancedT from './EnhancedT';
import EnhancedTable from './EnhancedTable';
import DownloadIcon from '@mui/icons-material/Download';
import {Button} from "@material-ui/core";
import {useEffect } from "react";

import "./TabPanel.scss";
import { MarginOutlined } from '@mui/icons-material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const colorhandle ={ 
   color : "#2A9134"
  }

  const customTheme = createTheme({
    palette: {
      primary: {
        light: "#42c2f5",
        main: "rgba(0,0,0,0.5)",
        dark: "#778899",
        contrastText: "#fff"
      }
    }
  });

  const theme = createTheme({
    overrides: {
      MuiTabs: {
        indicator: {
          backgroundColor: green[700]
        }
      },
      MuiTab: {
        "root": {
          "&$selected": {
            "backgroundColor": "#c8e6c9",
            "color": "#f57c00",
            "&:hover": {
              "backgroundColor": "#c8e6c9",
              "color": "#388e3c"
            }
          }
        }
      }
    }
  });
  useEffect(() =>{
    console.log(localStorage.getItem("token"))
    console.log("use effect works tabpanel")
    const dashboard = {
      search: props.searchVal,
      startdate: props.startDate,
      endDate :props.endDate
    };
    console.log(dashboard)
  },[])

  return (

   
    <Box sx={{ width: '100%' }}>
        {/* <ThemeProvider theme={customTheme}>
          <div className={classes.root}>
          <AppBar position="static" elevation={9}> */}
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                mat-stretch-tabs
                textColor="secondary"
                indicatorColor="secondary"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#2A9134"
                   }
                  }}
               
                 inkbarstyle={{background: 'red'}}
        >
          <Tab className="new "label="Work In Progress" {...a11yProps(0)} />
          <Tab className="new"label="Referred" {...a11yProps(1)} />
          <Tab className="new"label="Downgrade" {...a11yProps(2)} />
          <Tab className="new"label="Approved/Disbursed" {...a11yProps(2)} />
          <Tab className="new"label="Pending Disbursed" {...a11yProps(2)} />
          <Button style={{maxWidth: '30px', maxHeight: '50px', minWidth: '23px', minHeight: '50px', paddingRight:'28px',left:'550px',background:'#2A9134',color:'white'}} variant="contained"  endIcon={<DownloadIcon />} ></Button>
        </Tabs>
        
      <TabPanel value={value} index={0}>
       <EnhancedT startDate={props.startDate} endDate={props.endDate} searchVal={props.searchVal}  />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
     
      </Box>
    
  );
}
