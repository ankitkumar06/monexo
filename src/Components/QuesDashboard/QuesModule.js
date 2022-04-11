import React, { useState } from "react"
import { Grid, TextField, InputAdornment, Card, CardActions, CardContent } from "@material-ui/core"
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
import CredPar2 from "./CredPar2";
import newcss from "../QuesDashboard/Credpar.module.css";
import { useSelector } from "react-redux";




const QuesModule = (props) => {
  const userRole = useSelector((state) => state.authRedux.userRole)
  const [cdn, setCdn] = useState(0)
  const abc = (value) => {
    setCdn(value)

  }

  return (


    <div>

      <Grid className="searchMain" container >



        <Grid item className={seachcss.papercss} container >
          <Card className={seachcss.main_css} >

            <CardContent>
              <ThemeProvider >
              </ThemeProvider>
              <QTabPanel usersName={props.usersName} abc={abc} />
            </CardContent>
          </Card>
        </Grid>


        {cdn === 0 && userRole ==  4 &&  <Grid item className={seachcss.papercssn} container >
        <Grid  >
       <p className={newcss.ApprovalTxt}>Approval</p>
      </Grid>
      <Grid md={11} item className={newcss.horizon_line_new}></Grid>
          <Card className={seachcss.main_cssn} >

            <CardContent>
              <ThemeProvider >
              </ThemeProvider>
              { userRole ==  4 &&
              <CredPar2 />}
              
            </CardContent>
          </Card>
        </Grid>
        }
      </Grid>

    </div>

  )
}
export default QuesModule;
