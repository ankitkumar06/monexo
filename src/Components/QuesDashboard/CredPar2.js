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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// import {Button } from 'react-bootstrap'

// import seachcss from "../DashboardUi/Search.module.css"


export default function CredPar2(props, { parentCallback }) {

  const token = useSelector((state) => state.authRedux.token)
  const customerId = useSelector((state)=>state.custRedux.customerId)
  const auth = useSelector((state)=>state.authRedux.userName)

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

  const [appnameMatchStudent, setappnameMatchStudent] = React.useState('-');
  const [nameAsPerApplication, setnameAsPerApplication] = React.useState('-');
  const [nameAsPerCollegeIdCard, setnameAsPerCollegeIdCard] = React.useState('-');
  const [namePerctMatch, setnamePerctMatch] = React.useState('-');
  const [clgEmpNameMatch, setclgEmpNameMatch] = React.useState('-');
  const [clgEmpNameAsPerApp, setclgEmpNameAsPerApp] = React.useState('-');
  const [clgNameasPerIdCard, setclgNameasPerIdCard] = React.useState('-');
  const [clgPerctMatch, setclgPerctMatch] = React.useState('-');

  const [finalOfferResult, setfinalOfferResult] = React.useState('0');
  const [finalQuoteTenor, setfinalQuoteTenor] = React.useState('0');
  const [finalQuoteLoanAmt, setfinalQuoteLoanAmt] = React.useState('0');
  const [finalQuoteIntrest, setfinalQuoteIntrest] = React.useState('0');
  const [rejectCode, setrejectCode] = React.useState([]);
  const [productList, setproductList] = React.useState([]);
  const [decision, setdecision] = React.useState([]);
  const [decisionVal, setdecisionVal] = React.useState('');
  const [rejectCodeVal, setrejectCodeVal] = React.useState('');
  const [productVal, setproductVal] = React.useState('');

  const [approverRemark, setapproverRemark] = React.useState('');
  const [appAssignTo, setappAssignTo] = React.useState('-');
  const [appAssignDate, setappAssignDate] = React.useState('');
  const [approverLoanAmount, setapproverLoanAmount] = React.useState('0');


  const tablerowClickHandler = () => {
    // console.log("table row click" + values)
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
};

const isSelected = (name) => selected.indexOf(name) !== -1;

// Avoid a layout jump when reaching the last page with empty rows.
const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

const fetchcreditParameter= async () => {
    try {
        console.log(customerId)
        let valrequired = {
            customer_id: customerId
        }

        // const token =localStorage.getItem("token")
        setIsLoading(true)
        await axios.post(env.apiUrl + 'api/teleservice/getCreditParameter/', valrequired,
            {
                headers: { "Authorization": `Bearer ${token}` }

            }).then(res => {
                // console.log("demo url" + res.data.response.response)
              
                setappnameMatchStudent(res.data.response1.appnameMatchStudent)
                setnameAsPerApplication(res.data.response1.nameAsPerApplication)
                setnameAsPerCollegeIdCard(res.data.response1.nameAsPerCollegeIdCard)
                setnamePerctMatch(res.data.response1.namePerctMatch)
                setclgEmpNameMatch(res.data.response1.clgEmpNameMatch)
                setclgEmpNameAsPerApp(res.data.response1.clgEmpNameAsPerApp)
                setclgNameasPerIdCard(res.data.response1.clgNameasPerIdCard)
                setclgPerctMatch(res.data.response1.clgPerctMatch)
                setfinalOfferResult(res.data.response1.finalOfferResult)
                setfinalQuoteTenor(res.data.response1.finalQuoteTenor)
                setfinalQuoteLoanAmt(res.data.response1.finalQuoteLoanAmt)
                setfinalQuoteIntrest(res.data.response1.finalQuoteIntrest)
                setrejectCode(res.data.response1.rejectCode)
                setproductList(res.data.response1.productList)
                setappAssignTo(auth)
                setapproverRemark(res.data.response1.approverRemark)
                setappAssignDate(res.data.response1.appAssignDate)
                setapproverLoanAmount(res.data.response1.apploanAmount)


            })

        // } 
    } catch (error) {
        console.log(error)
        // alert("Please login again")
        // navigate('/dashboard')
    }
}

const handleChangeDecision=(event)=>{
  let item = event.target.value;
  setdecisionVal(item)
}

const rejectCodeHandler=(event)=>{
  let item = event.target.innerHTML;
  if(!item.startsWith("<"))
  {
    setrejectCodeVal(item)
  }else{
    setrejectCodeVal('')
  }
}

const productHandler=(event)=>{
  productListHandler()
  let item = event.target.innerHTML;
  if(!item.startsWith("<"))
  {
    setproductVal(item)
  }else{
    setproductVal('')
  }
}
const approverRemarkHandler=(event)=>{
  let item = event.target.value;
  setapproverRemark(item)
}


const submittingForm =async () =>{

  try {
      // let today = new Date();
      // let currentD  = today.getFullYear() + "-"+today.getMonth()  + "-" +today.getDate();
      // setcurrentDate(currentD)
      let valrequired={
        customer_id : customerId,
        approver_final_decision:decisionVal,
        reject_code :rejectCodeVal,
        product_offered : productVal,
        approver_remark : approverRemark,
        approver_user : appAssignTo,
        app_assigned_date : appAssignDate,
        approve_loan_amount : approverLoanAmount

     
      }
      console.log(valrequired)
      const token =localStorage.getItem("token")
      await axios.post(env.apiUrl + 'api/approvers/add-approvals/',valrequired,
      {
         headers: {"Authorization" : `Bearer ${token}`}

      }).then(res =>{
        // console.log("demo url" + res.data.response.response)
        let rowsval = res.data.response   
        console.log(rowsval)    
        navigate('/dashboard')     
       
      })
  }catch (error) {
      console.log(error)
    }

}

useEffect(() => {

    fetchcreditParameter();
    // console.log(dashboard)
}, [])

 

  const productListHandler = async (event)=>{
    let item = event.target.innerHTML;
    setproductVal(item)
    try {

      let valrequired = {
        product_id: item
      }
      setIsLoading(true)
      await axios.post(env.apiUrl + 'api/teleservice/getProductname/', valrequired,
          {
              headers: { "Authorization": `Bearer ${token}` }

          }).then(res => {
              // console.log("demo url" + res.data.response.response)
              let rowsval = res.data.response
              setapproverLoanAmount(rowsval[0].approverLoanAmount)
          })

      // } 
  } catch (error) {
      console.log(error)
  }
    
}

const submitButonhandler=async () =>{

  try {
      let today = new Date();
      let currentD  = today.getFullYear() + "-"+today.getMonth()  + "-" +today.getDate();
      // setcurrentDate(currentD)
      let valrequired={
          // customer_id : customer_id,
          // callbyUser : callByUser,
          // currentDate: currentDate,
          // currentDateRemark:currentDateRemark,
          // callSuccessfull :callSuccessfull,
          // callSuccessfullRemark : callSuccessfullRemark,
          // callNoSuccess : callNoSuccess,
          // callNoSuccessRemark : callNoSuccessRemark,
          // oragnisationName :oragnisationName,
          // netSalary : netSalary,
          // paySlip : paySlip,
      
      }

      // const token =localStorage.getItem("token")
      // await axios.post(env.apiUrl + 'api/teleservice/submit-creditParameter/',valrequired,
      // {
      //    headers: {"Authorization" : `Bearer ${token}`}

      // }).then(res =>{
      //   // console.log("demo url" + res.data.response.response)
      //   let rowsval = res.data.message   
      //   console.log(rowsval)         
       
      // })

    // } 
  }catch (error) {
      console.log(error)
    }

}
const eyeButtonhandler =async ()=>{

try {

        let valrequired = {
            customer_id: customerId
        }

        // const token =localStorage.getItem("token")
        setIsLoading(true)
        await axios.post(env.apiUrl + 'api/teleservice/getCreditParameter/', valrequired,
            {
                headers: { "Authorization": `Bearer ${token}` }

            }).then(res => {
                // console.log("demo url" + res.data.response.response)
            
            })

        // } 
    } catch (error) {
        console.log(error)
    }
}


  return (
    <div>
      <Grid container spacing={7}>
        <Grid container item md={12}>
          <Grid item xs={2}>
            <Grid className={newcss.labelcred}>
              Applicant Name match-Student ID
            </Grid>
            <Grid style={{marginRight:'28px'}}>{appnameMatchStudent}</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid className={newcss.labelcred}>Name as per application</Grid>
            <Grid style={{marginLeft:'29px'}}> {nameAsPerApplication}</Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid className={newcss.labelcred}>
              Name as per College ID Card
            </Grid>
            <Grid> {nameAsPerCollegeIdCard}</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid className={newcss.labelcred}>% of match</Grid>
            <Grid>{namePerctMatch}</Grid>
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
                onClick={eyeButtonhandler}
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
            <Grid style={{marginRight:'15px'}}> {clgEmpNameMatch}</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid className={newcss.labelcred}>
              College/Employer name as per application
            </Grid>
            <Grid style={{marginRight:'75px'}}> {clgEmpNameAsPerApp}</Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid className={newcss.labelcred}>
              College/Employer Name as per ID or salary credit
            </Grid>
            <Grid style={{marginRight:'20px'}}> {clgNameasPerIdCard}</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid className={newcss.labelcred}>% of match</Grid>
            <Grid> {clgPerctMatch}</Grid>
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
            <Grid className={newcss.spancred2}>{finalOfferResult}</Grid>
          </div>
          <div item className={newcss.boxcred}>
            <Grid
              style={{ marginRight: "110px" }}
              className={newcss.labelcred2}
            >
              Final Quote Loan amount
            </Grid>
            <Grid className={newcss.spancred2}>{finalQuoteLoanAmt}</Grid>
          </div>

          <div item className={newcss.boxcred}>
            <Grid className={newcss.labelcred2}>Final Quote Tenord</Grid>
            <Grid className={newcss.spancred2}>{finalQuoteTenor}</Grid>
          </div>
          <div item className={newcss.boxcred}>
            <Grid className={newcss.labelcred2}>Final Quote Interest</Grid>
            <Grid className={newcss.spancred2}>{finalQuoteIntrest}</Grid>
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
                    value={decisionVal}
                    label="Decision"
                    onChange={handleChangeDecision}
                  >
                    <MenuItem value='Approve'>Approve</MenuItem>
                    <MenuItem value='Reject'>Reject</MenuItem>
                    
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
                  {/* <label id="code"></label> */}
                  {/* <Select
                    labelId="demo"
                    id="demoid"
                    value={rejectCode}
                    label="Select Reject Code"
                    onChange={handleChangenew}
                  >
                  </Select> */}
                  <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={rejectCode}
                sx={{ width: 430 }}
                value={rejectCodeVal} 
                onChange={rejectCodeHandler}
                renderInput={(params) => <TextField {...params} label="Select Reject Code" />}
                />
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
                  {/* <InputLabel id="product">Product Name</InputLabel>
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
                  </Select> */}

                  <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={productList}
                sx={{ width: 430 }}
                value={productVal} 
                onChange={productListHandler}
                renderInput={(params) => <TextField {...params} label="Product Name" />}
                />
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
                  value={approverRemark}
                  placeholder="Enter Message"
                  onChange={approverRemarkHandler}
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
            <Grid style={{marginLeft:'40px'}} className={newcss.spancred2}> {appAssignTo}</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid className={newcss.labelcred2}>App Assigned Date</Grid>
            <Grid style={{marginLeft:'15px'}} className={newcss.spancred2}> {appAssignDate}</Grid>
          </Grid>

          <Grid item xs={3}>
            <Grid className={newcss.labelcred2}>
            Approver Loan Amount
            </Grid>
            <Grid style={{marginLeft:'-50px', color:'green'}} className={newcss.spancred2}> {approverLoanAmount}</Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid>
            
            <Button style={{padding:'17px 54px', marginTop:"15px", marginLeft:'130px'}} variant="contained" color="success" 
            onClick={submittingForm}>
        SUBMIT
      </Button>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
