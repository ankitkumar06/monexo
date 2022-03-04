import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, pink, green } from "@material-ui/core/colors";
import EnhancedTable from './EnhancedTable'
import {useEffect } from "react";

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

  const theme = createMuiTheme({
    overrides: {
      MuiTabs: {
        indicator: {
          backgroundColor: green[700]
        }
      },
      MuiTab: {
        root: {
          "&:hover": {
            backgroundColor: green[100],
            color: green[700]
          }
        },
        selected: {
          backgroundColor: green[100],
          color: orange[700],
          "&:hover": {
            backgroundColor: green[100],
            color: green[700]
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

    <MuiThemeProvider theme={theme}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
                 inkbarstyle={{background: 'red'}}
        >
          <Tab label="Work In Progress" {...a11yProps(0)} />
          <Tab label="Referred" {...a11yProps(1)} />
          <Tab label="Downgrade" {...a11yProps(2)} />
          <Tab label="Approved/Disbursed" {...a11yProps(2)} />
          <Tab label="Pending Disbursed" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <EnhancedTable startDate={props.startDate} endDate={props.endDate} searchVal={props.searchVal} />
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
    </MuiThemeProvider>
  );
}
