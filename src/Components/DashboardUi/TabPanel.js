import * as React  from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange, pink, green } from "@material-ui/core/colors";
import EnhancedT from './EnhancedT';
import Referred from './Reffered';
import Downgrade from './Downgrade';
import AppDisb from './AppDisb'
import EnhancedTable from './EnhancedTable';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import {Button} from "@material-ui/core";
import {useEffect } from "react";

import "./TabPanel.scss";
import { MarginOutlined } from '@mui/icons-material';
import { CSVLink  } from "react-csv";
import PendingDisbursed from './PendingDisbursed';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const childFunc = React.useRef(null)
 

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
  const [data, setData] = React.useState([]);
  // const childFunc = React.useRef(null)

  // React.useEffect(() => {
  //   Parentfun.current = childFunc.current
  //   }, [])
  // parentToChild = () =>{
  //   setData()
  // }
  
  let headers = [
    { label: "Cust ID", key: "customer_id" },
    { label: "Cust Name", key: "customer_name" },
    { label: "App ID", key: "app_id" },
    { label: "Comepleted Time", key: "completed_date" },
    { label: "City", key: "city" },
    { label: "Loan Product", key: "loan_product" },
    { label: "Bereau Score", key: "beaure_score" },
    { label: "Stage", key: "user_stage" },
    { label: "Loan Offered", key: "loan_offered" },
    { label: "User", key: "user" }
  ];
  

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
  // useEffect(() =>{
  //   console.log(localStorage.getItem("token"))
  //   console.log("use effect works tabpanel")
  //   const dashboard = {
  //     search: props.searchVal,
  //     startdate: props.startDate,
  //     endDate :props.endDate
  //   };
  //   console.log(dashboard)
  // },[])

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
          {/* <CSVDownload  target="_blank" />; */}
  
          <Button style={{maxWidth: '30px', borderRadius: '8px', maxHeight: '50px', minWidth: '23px', minHeight: '50px', paddingRight:'28px',left:'490px',background:'#2A9134',color:'white'}} variant="contained"  endIcon={<SyncOutlinedIcon />} > </Button>
          <CSVLink data={data}  headers={headers} style={{ minHeight: '28px', marginLeft:'500px',background:'#2A9134',color:'white',
           borderRadius: '8px',padding:'10px'}} variant="contained"> 
            <span style={{paddingTop:'12px'}}><ArrowDownwardOutlinedIcon /></span> 
          </CSVLink>
           
        </Tabs>
        
      <TabPanel value={value} index={0}>
       <EnhancedT startDate={props.startDate} endDate={props.endDate} searchVal={props.searchVal} setData={setData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Referred startDate={props.startDate} endDate={props.endDate} searchVal={props.searchVal} setData={setData} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Downgrade startDate={props.startDate} endDate={props.endDate} searchVal={props.searchVal} setData={setData} />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <AppDisb startDate={props.startDate} endDate={props.endDate} searchVal={props.searchVal} setData={setData} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <PendingDisbursed startDate={props.startDate} endDate={props.endDate} searchVal={props.searchVal} setData={setData} />
      </TabPanel>
     
      </Box>
    
  );
}
