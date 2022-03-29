import * as React from "react";

import Button from '@mui/material/Button';
import { useEffect, useCallback } from "react";
import axios from "axios";
import env from "../../enviorment.json";

import { useState } from "react";
import classes from "../DashboardUi/EnhancedT.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import newcss from "../QuesDashboard/Credpar.module.css";

import { Grid} from "@material-ui/core";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { styled } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import {Button } from 'react-bootstrap'

// import seachcss from "../DashboardUi/Search.module.css"

export default function CredPar2(props, { parentCallback }) {
  //  const {setData} =props;
  const token = useSelector((state) => state.authRedux.token);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState();
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const [rows, setJsondata] = useState();
  const [datarender, setdataRender] = useState(false);
  const [rows, setRowsData] = useState([]);
  const [paginationVal, setPagination] = useState(0);
  const [countData, setCountData] = useState(0);
  const [isload, setIsLoading] = useState(false);
  const [tmproryrows, setTemporaryRows] = useState([]);
  const [isRecord, setIsRecord] = useState(false);
  let storetempdata = [];
  const navigate = useNavigate();

  const fetchCustomerDataHandler = async () => {
    try {
      let today = new Date(props.startDate);
      let startdateVal =
        today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
      let endDateVal =
        props.endDate.getFullYear() +
        "-" +
        props.endDate.getMonth() +
        "-" +
        props.endDate.getDate();
      if (startdateVal === endDateVal) {
        props.startDate.setDate(props.startDate.getDate() - 10);
      }
      startdateVal =
        today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();

      // if(startdateVal < endDateVal)
      // {

      let valrequired = {
        search: props.searchVal,
        from_date: startdateVal,
        to_date: endDateVal,
      };

      // const token =localStorage.getItem("token")
      setIsLoading(true);
      await axios
        .post(env.apiUrl + "api/users/dashboard/", valrequired, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          // console.log("demo url" + res.data.response.response)
          let rowsval = res.data.response;

          rowsval.map(
            (item) =>
              (item.Override = <Button variant="outlined">Override</Button>)

            // key={item.id}
          );
          props.setData(rowsval);
          setRowsData(rowsval);
          setIsLoading(false);
          setdataRender(true);
          if (rowsval.length == 0) {
            setIsRecord(true);
          }
        });

      // }
    } catch (error) {
      console.log(error);
      // alert("Please login again")
      // navigate('/dashboard')
    }
  };

  useEffect(() => {
    // setdataRender(true)
    // const dashboard = {
    //   search: props.searchVal,
    //   startdate: props.startDate,
    //   endDate :props.endDate
    // };

    fetchCustomerDataHandler();
    // console.log(dashboard)
  }, []);

  const tablerowClickHandler = () => {
    // console.log("table row click" + values)
  };

  // useEffect(() => {
  //   fetchCustomerDataHandler();
  // }, []);

  const [decision, setDecision] = React.useState("");
  const [code, setCode] = React.useState("");
  const [product, setProduct] = React.useState("");

  const handleChange = (event) => {
    setDecision(event.target.value);
  };

  const handleChangenew = (event) => {
    setCode(event.target.value);
  };

  const handleChangenew2 = (event) => {
    setProduct(event.target.value);
  };

  return (
    <div>
      <Grid container spacing={7}>
        <Grid container item md={12}>
          <Grid item xs={2}>
            <Grid className={newcss.labelcred}>
              Applicant Name match-Student ID
            </Grid>
            <Grid> cerdit-beaure-details/</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid className={newcss.labelcred}>Name as per application</Grid>
            <Grid> cerdit-beaure-details/</Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid className={newcss.labelcred}>
              Name as per College ID Card
            </Grid>
            <Grid> cerdit-beaure-details/</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid className={newcss.labelcred}>% of match</Grid>
            <Grid> cerdit-beaure-details/</Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid>
              <Button
                variant="outlined"
                style={{
                  borderBlockColor: "#61C261",
                  color: "#61C261",
                  paddingRight: "6px",
                  paddingLeft: "19px",
                  paddingBottom: "1px",
                  maxWidth: "5px",
                  minWidth: "5px",
                  left: "40px",
                  top: "20px",
                }}
                startIcon={<VisibilityOutlinedIcon />}
              ></Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={newcss.divider_line3}></Grid>
        <Grid container item md={12}>
          <Grid item xs={2}>
            <Grid className={newcss.labelcred}>
              College / Employer Name match
            </Grid>
            <Grid> cerdit-beaure-details/</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid className={newcss.labelcred}>
              College/Employer name as per application
            </Grid>
            <Grid> cerdit-beaure-details/</Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid className={newcss.labelcred}>
              College/Employer Name as per ID or salary credit
            </Grid>
            <Grid> cerdit-beaure-details/</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid className={newcss.labelcred}>% of match</Grid>
            <Grid> cerdit-beaure-details/</Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid>
              <Button
                variant="outlined"
                style={{
                  borderBlockColor: "#61C261",
                  color: "#61C261",
                  paddingRight: "6px",
                  paddingLeft: "19px",
                  paddingBottom: "1px",
                  maxWidth: "5px",
                  minWidth: "5px",
                  left: "40px",
                  top:"15px"
                }}
                startIcon={<VisibilityOutlinedIcon />}
              ></Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={newcss.divider_line4}></Grid>
        <Grid container item md={12}>
          <div item className={newcss.boxcred}>
            <Grid className={newcss.labelcred2}>Final Offer Result</Grid>
            <Grid className={newcss.spancred2}>RESULT</Grid>
          </div>
          <div item className={newcss.boxcred}>
            <Grid
              style={{ marginRight: "110px" }}
              className={newcss.labelcred2}
            >
              Final Quote Loan amount
            </Grid>
            <Grid className={newcss.spancred2}>RESULT</Grid>
          </div>

          <div item className={newcss.boxcred}>
            <Grid className={newcss.labelcred2}>Final Quote Tenord</Grid>
            <Grid className={newcss.spancred2}>RESULT</Grid>
          </div>
          <div item className={newcss.boxcred}>
            <Grid className={newcss.labelcred2}>Final Quote Interest</Grid>
            <Grid className={newcss.spancred2}>RESULT</Grid>
          </div>
        </Grid>
        <Grid className={newcss.divider_line5}></Grid>
        <Grid container item md={12}>
          <Grid item>
            <Grid className={newcss.labelcred3}>Approver Final Decision</Grid>
            <div item className={newcss.boxcred2}>
              <Grid>
                <FormControl fullWidth>
                  <InputLabel id="decision">Decision</InputLabel>
                  <Select
                    labelId="demo"
                    id="demoid"
                    value={decision}
                    label="Decision"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            <Grid
              style={{ marginRight: "295px" }}
              className={newcss.labelcred3}
            >
              Reject code
            </Grid>
            <div item className={newcss.boxcred2}>
              <Grid>
                <FormControl fullWidth>
                  <InputLabel id="code">Select Reject Code</InputLabel>
                  <Select
                    labelId="demo"
                    id="demoid"
                    value={code}
                    label="Select Reject Code"
                    onChange={handleChangenew}
                  >
                    <MenuItem value={10}>new</MenuItem>
                    <MenuItem value={20}>abc</MenuItem>
                    <MenuItem value={30}>xuz</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </div>
          </Grid>

          <Grid item>
            <Grid
              style={{ marginRight: "265px" }}
              className={newcss.labelcred3}
            >
              Select Products
            </Grid>
            <div item className={newcss.boxcred2}>
              <Grid>
                <FormControl fullWidth>
                  <InputLabel id="product">Product Name</InputLabel>
                  <Select
                    labelId="demo"
                    id="demoid"
                    value={product}
                    label="Product Name"
                    onChange={handleChangenew2}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid container item md={12}>
          <Grid item>
            <div item>
              <Grid
                style={{ marginRight: "73rem" }}
                className={newcss.labelcred3}
              >
                Approver Remarks
              </Grid>
              <Grid item>
                <input
                  className={newcss.boxcred3}
                  type="text"
                  placeholder="Enter Message"
                />
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid container item md={12}>
          <Grid item xs={3}>
            
            <Grid className={newcss.labelcred2}>
            APP Assigned to
            </Grid>
            <Grid style={{marginLeft:'40px'}} className={newcss.spancred2}> John Parker</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid className={newcss.labelcred2}>App Assigned Date</Grid>
            <Grid style={{marginLeft:'15px'}} className={newcss.spancred2}> 20-01-2021</Grid>
          </Grid>

          <Grid item xs={3}>
            <Grid className={newcss.labelcred2}>
            Approver Loan Amount
            </Grid>
            <Grid style={{marginLeft:'-50px', color:'green'}} className={newcss.spancred2}> 30,000</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid>
            
            <Button style={{padding:'17px 54px', marginTop:"15px", marginLeft:'130px'}} variant="contained" color="success">
        SUBMIT
      </Button>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
