import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange, pink, green } from "@material-ui/core/colors";

import DownloadIcon from '@mui/icons-material/Download';
import { Button } from "@material-ui/core";
import { useEffect } from "react";

import "./QTabPanel.scss";
import { MarginOutlined, PaddingSharp } from '@mui/icons-material';
import QuestionT from './QuestionT';
import CreditB from './CreditBureau';
import AddressBank from './AddressBank';
import KycInfo from './KycInfo';
import Documents from './Documents';
import Badge from '@mui/material/Badge';
import CustomerInformation from './CustomerInformation'


function QTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="QTabPanel"
      hidden={value !== index}
      id={`simple-QTabPanel-${index}`}
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

QTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-QTabPanel-${index}`,
  };
}

export default function QTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const colorhandle = {
    color: "#2A9134"
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
    // console.log(localStorage.getItem("token"))
    // console.log("use effect works QTabPanel")
    // const dashboard = {
    //   search: props.searchVal,
    //   startdate: props.startDate,
    //   endDate :props.endDate
    // };
    // console.log(dashboard)
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
            backgroundColor: "#2A9134",
          }
        }}
        inkbarstyle={{ background: 'red' }}
      >
        <Tab className="new1 " label="Questionnaire" {...a11yProps(0)} sx={{ paddingRight: "30px" }} />
        {/* <Badge badgeContent={4} color="secondary"> */}
        <Tab className="new1"
          sx={{ paddingRight: "30px" }}
          label={<Badge badgeContent={5} sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "red",
              right: "-15px",
              top: "7px",
            }
          }}>
            Credit Bureau Details
          </Badge>} {...a11yProps(1)} />
        {/* </Badge> */}
        <Tab className="new1" label={<Badge badgeContent={5} sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "red",
              right: "-15px",
              top: "7px",
            }
          }}>Customer Information </Badge>} {...a11yProps(2)} sx={{ paddingRight: "30px" }} />
        <Tab className="new1" label="Address & Bank information " {...a11yProps(2)} sx={{ paddingRight: "30px" }} />
        <Tab className="new1" label= {<Badge badgeContent={5} sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "red",
              right: "-15px",
              top: "7px",
            }
          }}>KYC Information </Badge>} {...a11yProps(2)} sx={{ paddingRight: "30px" }} />
        <Tab className="new1" label= {<Badge badgeContent={5} sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "red",
              right: "-15px",
              top: "7px",
            }
          }}>Documents  </Badge>}{...a11yProps(2)} sx={{ paddingRight: "30px" }} />

      </Tabs>

      <QTabPanel value={value} index={0}>
       <QuestionT  usersName={props.usersName} />
      </QTabPanel>
      <QTabPanel value={value} index={1}>
        <CreditB />
      </QTabPanel>
      <QTabPanel value={value} index={2}>
        <CustomerInformation />
      </QTabPanel>
      <QTabPanel value={value} index={3}>
      <AddressBank />
      </QTabPanel>
      <QTabPanel value={value} index={4}>
      <KycInfo />
      </QTabPanel>
      <QTabPanel value={value} index={5}>
      <Documents />
      </QTabPanel>

    </Box>

  );
}
