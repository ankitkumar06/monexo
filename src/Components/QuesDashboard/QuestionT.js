import * as React from 'react';
import PropTypes from 'prop-types';

import { useEffect, useCallback } from "react";
import axios from 'axios';

import { useState } from "react";


import { Container, Col, Button } from 'react-bootstrap'
import "./ques.scss";

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Autocomplete from '@mui/material/Autocomplete';
import env from '../../enviorment.json';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';




const QuestionT = (props) => {
    const navigate = useNavigate();
    const token = useSelector((state)=>state.authRedux.token)

    const [banklist, setBankList] = useState([]);
    const [citylist, setCityList] = useState([]);
    const [reasonfail, setReasonFail] = useState([]);
    const [knowMonexo, setKnowMonexo] = useState([]);
    const [customerQuestionnierData, setcustomerQuestionnierData] = useState([]);

    const [currentDate , setcurrentDate] = useState('');
    const [currentDateRemark, setcurrentDateRemark] = useState('');
    const [callSuccessfull, setcallSuccessfull] = useState('');
    const [callSuccessfullRemark, setcallSuccessfullRemark] = useState('');
    const [callNoSuccess, setcallNoSuccess] = useState('');
    const [callNoSuccessRemark, setcallNoSuccessRemark] = useState('');
    const [oragnisationName, setoragnisationName] = useState('');
    const [netSalary, setnetSalary] = useState('');
    const [paySlip, setpaySlip] = useState('');
    const [paySlipRemark, setpaySlipRemark] = useState('');
    const [internetBanking, setinternetBanking] = useState('');
    const [bankName, setbankName] = useState('');
    const [iscompanyId, setIscompanyId] = useState('');
    const [iscomapnyemailId, setiscomapnyemailId] = useState('');
    const [isSelfEmployeed, setisSelfEmployeed] = useState('');
    const [howknowMonexo, sethowknowMonexo] = useState('');
    const [howknowMonexoRemark, sethowknowMonexoRemark] = useState('');
    const [cityName, setcityName] = useState('');
    const [cityNameRemark, setcityNameRemark] = useState('');
    const [nextfollowupDate, setnextfollowupDate] = useState('');
    const [nextfollowupDateRemark, setnextfollowupDateRemark] = useState('');
    const [nextfollowupTime, setnextfollowupTime] = useState('');
    const [nextfollowupTimeRemark, setnextfollowupTimeRemark] = useState('');
    const [callRemark, setcallRemark] = useState('');
    const [customer_id, setCustomerId] = useState('');
    const [callByUser, setcallByUser] = useState('');


    
    const [value, setValue] = React.useState(null);



    let storetempdata = [];

    const fetchBankList =async () =>{
        try {
        //   const token =localStorage.getItem("token")
          await axios.get(env.apiUrl + 'api/teleservice/list-bank/',
          {
             headers: {"Authorization" : `Bearer ${token}`}
  
          }).then(res =>{
            // console.log("demo url" + res.data.response.response)
            let rowsval = res.data.response 
            setBankList(rowsval)
          })
    
        // } 
      }catch (error) {
          console.log(error)
        }
      }

      const fetchCityList =async () =>{
        try {
        //   const token =localStorage.getItem("token")
          await axios.get(env.apiUrl + 'api/teleservice/list-city/',
          {
             headers: {"Authorization" : `Bearer ${token}`}
  
          }).then(res =>{
            // console.log("demo url" + res.data.response.response)
            let rowsval = res.data.response 
            setCityList(rowsval)
          })
    
        // } 
      }catch (error) {
          console.log(error)
        }
      }

      const fetchFailReasonList =async () =>{
        try {
        //   const token =localStorage.getItem("token")
          await axios.get(env.apiUrl + 'api/teleservice/call-fail/',
          {
             headers: {"Authorization" : `Bearer ${token}`}
  
          }).then(res =>{
            // console.log("demo url" + res.data.response.response)
            let rowsval = res.data.response 
            setReasonFail(rowsval)
          })
    
        // } 
      }catch (error) {
          console.log(error)
        }
      }

      const fetchknowMonexo =async () =>{
        try {
        //   const token =localStorage.getItem("token")
          await axios.get(env.apiUrl + 'api/teleservice/how-i-know-monexo/',
          {
             headers: {"Authorization" : `Bearer ${token}`}
  
          }).then(res =>{
            // console.log("demo url" + res.data.response.response)
            let rowsval = res.data.response 
            setKnowMonexo(rowsval)
          })
    
        // } 
      }catch (error) {
          console.log(error)
        }
      }


      const fetchCustomerQuestionnierDetail =async () =>{
        try {
        //   const token =localStorage.getItem("token")
          let valrequired = {
            customer_id : customer_id
          }
          await axios.post(env.apiUrl + 'api/teleservice/get-user-questionnare/',valrequired,
          {
             headers: {"Authorization" : `Bearer ${token}`}
  
          }).then(res =>{
            // console.log("demo url" + res.data.response.response)
            let rowsval = res.data.response 
            setcustomerQuestionnierData(rowsval)
            console.log(customerQuestionnierData);
            if(!rowsval)
            {
                let today = new Date();
                let month = today.getMonth() +1
                let startdateVal  =today.getDate() + "-"+month + "-" +today.getFullYear()
                setcurrentDate(startdateVal)

            }
            if(rowsval[0].updated_date)
            {
                setcurrentDate(rowsval[0].updated_date)
            }else{
                let today = new Date();
                let month = today.getMonth() +1
                let startdateVal  = today.getDate() +"-"+month + "-" +today.getFullYear()
                setcurrentDate(startdateVal)
            }

            setcurrentDateRemark(rowsval[0].date_remark)
            if(rowsval[0].is_call_to_customer_success)
            {
                setcallSuccessfull("Yes")
            }else{
                setcallSuccessfull("No")
            }
            setcallSuccessfullRemark(rowsval[0].call_fail_reason)
            setcallNoSuccess(rowsval[0].call_not_success)
            setcallNoSuccessRemark(rowsval[0].call_not_success_text)
            setoragnisationName(rowsval[0].name_of_oarganization)
            setnetSalary(rowsval[0].net_salary)
            if(rowsval[0].is_monthly_payslip)
            {
                setpaySlip("Yes")
            }else{
                setpaySlip("No")
            }
            setpaySlipRemark(rowsval[0].payslip_not_reason)
            if(rowsval[0].is_internet_banking)
            {
                setinternetBanking("Yes")
            }else{
                setinternetBanking("No")
            }
            setbankName(rowsval[0].bank_name_of_salary)
            if(rowsval[0].is_company_Id)
            {
                setIscompanyId("Yes")
            }else{
                setIscompanyId("No")
            }

            if(rowsval[0].is_company_email)
            {
                setiscomapnyemailId("Yes")
            }else{
                setiscomapnyemailId("No")
            }

            if(rowsval[0].is_self_employed)
            {
                setisSelfEmployeed("Yes")
            }else{
                setisSelfEmployeed("No")
            }
            sethowknowMonexo(rowsval[0].how_you_know_monexo)
            sethowknowMonexoRemark(rowsval[0].another_medium)
            setcityName(rowsval[0].city)
            setcityNameRemark(rowsval[0].city_text)
            setnextfollowupDate(rowsval[0].next_followup_date)
            setnextfollowupDateRemark(rowsval[0].next_followup_date_remark)
            setnextfollowupTime(rowsval[0].next_followup_time_same_day)
            setnextfollowupTimeRemark(rowsval[0].next_followup_time_same_day_remark)
            setcallRemark(rowsval[0].call_summary_remark)
          })
    
        // } 
      }catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() =>{   
        const a = localStorage.getItem("custID")  
        setcallByUser(props.usersName)
        setCustomerId(a);
        fetchBankList();
        fetchCityList();
        fetchFailReasonList();
        fetchknowMonexo();
        fetchCustomerQuestionnierDetail();
      },[customer_id])



    // const initialValues = {

    // };
    // const abc= () => {
    //     ('#datet').datetimepicker({
    //         viewMode: 'years'
    //     });
    // };
    const dateRemarkHandler=(event)=>{
        let item = event.target.value;
        setcurrentDateRemark(item)
    }

    const callSuccessHandler=(event)=>{
        let item = event.target.value;
        setcallSuccessfull(item)
    }

    const callSuccessRemarkHandler=(event)=>{
        let item = event.target.value;
        setcallSuccessfullRemark(item)
    }

    const callNoSuccessHandler=(event)=>{
        let item = event.target.innerHTML;
        if(!item.startsWith("<"))
        {
            setcallNoSuccess(item)
        }else{
            setcallNoSuccess('')
        }
 
    }

    const callNoSuccessRemarkHandler=(event)=>{
        let item = event.target.value;
        setcallNoSuccessRemark(item)
    }

    const organisationNameHandler=(event)=>{
        let item = event.target.value;
        setoragnisationName(item)
    }

    const netSalaryHandler=(event)=>{
        let item = event.target.value;
        setnetSalary(item)
    }

    const salarySlipHandler=(event)=>{
        let item = event.target.value;
        setpaySlip(item)
    }

    const salarySlipRemarkHandler=(event)=>{
        let item = event.target.value;
        setpaySlipRemark(item)
    }

    const internetBankingHandler=(event)=>{
        let item = event.target.value;
        setinternetBanking(item)
    }

    const bankNameHandler=(event)=>{
        let item = event.target.innerHTML;
        if(!item.startsWith("<"))
        {
            setbankName(item)
        }else{
            setbankName('')
        }
        
    }

    const companyIdHandler=(event)=>{
        let item = event.target.value;
        setIscompanyId(item)
    }

    const companyEmailIdHandler=(event)=>{
        let item = event.target.value;
        setiscomapnyemailId(item)
    }

    const selfEmployeedHandler=(event)=>{
        let item = event.target.value;
        setisSelfEmployeed(item)
    }

    const howtoknowMonexoHandler=(event)=>{
        let item = event.target.innerHTML;
        if(!item.startsWith("<"))
        {
            sethowknowMonexo(item)
        }else{
            sethowknowMonexo('')
        }
    }

    const howtoknowMonexoRemarkHandler=(event)=>{
        let item = event.target.value;
        sethowknowMonexoRemark(item)
    }

    const cityNameHandler=(event)=>{
        let item = event.target.innerHTML;
        if(!item.startsWith("<"))
        {
            setcityName(item)
        }else{
            setcityName('')
        }
    }

    const cityNameRemarkHandler=(event)=>{
        let item = event.target.value;
        setcityNameRemark(item)
    }

    const followupdateHandler=(event)=>{
        let item = event.target.value;
        setnextfollowupDate(item)
    }

    const followupdateRemarkHandler=(event)=>{
        let item = event.target.value;
        setnextfollowupDateRemark(item)
    }

    const followupTimeHandler=(event)=>{
        let item = event.target.value;
        setnextfollowupTime(item)
    }

    const followupTimeRemarkHandler=(event)=>{
        let item = event.target.value;
        setnextfollowupTimeRemark(item)
    }

    const callRemarkHandler=(event)=>{
        let item = event.target.value;
        setcallRemark(item)
    }

    const submittingForm =async () =>{

        try {
            let today = new Date();
                let month = today.getMonth() +1
                let currentD  = today.getDate() +"-"+month + "-" +today.getFullYear()
         
            setcurrentDate(currentD)
            let valrequired={
                customer_id : customer_id,
                callbyUser : callByUser,
                currentDate: currentDate,
                currentDateRemark:currentDateRemark,
                callSuccessfull :callSuccessfull,
                callSuccessfullRemark : callSuccessfullRemark,
                callNoSuccess : callNoSuccess,
                callNoSuccessRemark : callNoSuccessRemark,
                oragnisationName :oragnisationName,
                netSalary : netSalary,
                paySlip : paySlip,
                paySlipRemark : paySlipRemark,
                internetBanking : internetBanking,
                bankName : bankName,
                iscompanyId : iscompanyId,
                iscomapnyemailId : iscomapnyemailId,
                isSelfEmployeed : isSelfEmployeed,
                howknowMonexo : howknowMonexo,
                howknowMonexoRemark :howknowMonexoRemark,
                cityName : cityName,
                cityNameRemark :cityNameRemark,
                nextfollowupDate : nextfollowupDate,
                nextfollowupDateRemark : nextfollowupDateRemark,
                nextfollowupTime : nextfollowupTime,
                nextfollowupTimeRemark : nextfollowupTimeRemark,
                callRemark : callRemark
            }
    
            // const token =localStorage.getItem("token")
            await axios.post(env.apiUrl + 'api/teleservice/submit-questionnare/',valrequired,
            {
               headers: {"Authorization" : `Bearer ${token}`}
    
            }).then(res =>{
              // console.log("demo url" + res.data.response.response)
              let rowsval = res.data.message   
              console.log(rowsval)   
              navigate('/dashboard')     
             
            })
      
          // } 
        }catch (error) {
            console.log(error)
          }

    }




    return (


        <div>
            <section className="py-5, headertab">
                <div className="container">
                    <div className='row'>

                        <span className='Newtext'>Question</span>
                        <span className='Newtext1'>Possible answers</span>
                        <span className='Newtext2'> Remarks</span>
                    </div>
                </div>
            </section>

            <form className="form-inline" >
                <label for="Date">Date</label>

                <span>{currentDate}</span>

                <input type="text" id="text" placeholder="Enter Message" name="date" onChange={dateRemarkHandler} value={currentDateRemark} />

            </form>

            <div className="line2"></div>

            <form className="form-inline" >
                <label for="call">Was call to customer successful ?</label>
                {callSuccessfull != "" ?
                (<select type="select" id="call" name="call" value={callSuccessfull} onChange={callSuccessHandler} >
                    <option  disabled >Select Option</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>) : (
                <select type="select" id="call" name="call"  onChange={callSuccessHandler} >
                    <option  disabled selected>Select Option</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                )}

                <input type="text" id="call" placeholder="Enter Message" name="call" value={callSuccessfullRemark} onChange={callSuccessRemarkHandler} />


            </form>

            <div className="line3"></div>

            <form className="form-inline" >
                <label for="nocall">Reason for call to customer not successful </label>
                {/* <select type="select" id="nocall" name="nocall" >
                    <option value="" disabled selected>Select Option</option>
                </select> */}
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={reasonfail}
                sx={{ width: 430 }}
                value={callNoSuccess}
                onChange={callNoSuccessHandler}
                renderInput={(params) => <TextField {...params} label="Select Option" />}
                />

                <input type="text" id="nocall" placeholder="Enter Message" name="nocall" value={callNoSuccessRemark} onChange={callNoSuccessRemarkHandler} />

            </form>

            <div className="line4"></div>

            <form className="form-inline" >
                <label for="org">What is the name of the organization the customer is working for </label>


                <input type="text" id="org" placeholder="Enter organization name" name="org"  value={oragnisationName} onChange={organisationNameHandler} />


            </form>

            <div className="line5"></div>

            <form className="form-inline" >
                <label for="sal">What is your Net Salary </label>


                <input type="text" id="sal" placeholder="Enter Net Salary" name="sal"  value={netSalary} onChange={netSalaryHandler} />


            </form>

            <div className="line6"></div>

            <form className="form-inline" >
                <label for="payslip">Do you get a monthly pay slip? </label>
                {paySlip !="" ?(<select type="select" id="payslip" name="payslip" value={paySlip} onChange={salarySlipHandler} >
                    <option value="" disabled >Select Option</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>):(
                    <select type="select" id="payslip" name="payslip" onChange={salarySlipHandler} >
                    <option value="" disabled selected>Select Option</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                )}
                

                <input type="text" id="payslip" placeholder="Enter Message" name="payslip" value={paySlipRemark} onChange={salarySlipRemarkHandler} />


            </form>

            <div className="line7"></div>

            <form className="form-inline" >
                <label for="intbank">Do you have internet banking facility? </label>
                {internetBanking !="" ? (
                    <select type="select" id="intbank" name="intbank" value={internetBanking}  onChange={internetBankingHandler} >
                    <option value="" disabled >Select bank</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Yes- but some issue</option>
                </select>

                ):(
                    <select type="select" id="intbank" name="intbank"  onChange={internetBankingHandler} >
                    <option value="" disabled selected>Select bank</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Yes- but some issue</option>
                </select>
                )}
                

            </form>

            <div className="line8"></div>

            <form className="form-inline" >
                <label for="salcre">To which bank is your salary being credited </label>
                {/* <select type="select" id="salcre" name="salcre" >
                    <option value="" disabled selected>Select Option</option>
                </select> */}

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={banklist}
                sx={{ width: 430 }}
                value={bankName} 
                onChange={bankNameHandler}
                renderInput={(params) => <TextField {...params} label="Select a Bank" />}
                />

            </form>
          

            <div className="line9"></div>

            <form className="form-inline" >
                <label for="icard">Do you have Company I card?</label>
                {iscompanyId != "" ?(
                    <select type="select" id="icard" name="icard" value={iscompanyId} onChange={companyIdHandler} >
                    <option value="" disabled >Select Option</option>
                    <option>Yes</option>
                    <option>No</option>
                    </select>
                ) : (
                    <select type="select" id="icard" name="icard"  onChange={companyIdHandler} >
                    <option value="" disabled selected>Select Option</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                )}
               

            </form>

            <div className="line11"></div>

            <form className="form-inline" >
                <label for="emailid">Do you have company email ID? </label>
                {iscomapnyemailId !="" ? (
                      <select type="select" id="emailid" name="emailid"  value={iscomapnyemailId} onChange={companyEmailIdHandler} >
                      <option value="" disabled >Select Option</option>
                      <option>Yes</option>
                      <option>No</option>
                  </select>
                ):(
                    <select type="select" id="emailid" name="emailid"   onChange={companyEmailIdHandler} >
                    <option value="" disabled selected>Select Option</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                )}
              

            </form>

            <div className="line12"></div>

            <form className="form-inline" >
                <label for="selfemp">Is customer Self Employed </label>
                { isSelfEmployeed !=""? (
                     <select type="select" id="selfemp" name="selfemp"  value={isSelfEmployeed} onChange={selfEmployeedHandler} >
                     <option value="" disabled >Select Option</option>
                     <option>Yes</option>
                     <option>No</option>
                 </select>
                ):(
                    <select type="select" id="selfemp" name="selfemp"   onChange={selfEmployeedHandler} >
                    <option value="" disabled selected>Select Option</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                )}
               

            </form>

            <div className="line13"></div>

            <form className="form-inline" >
                <label for="monexo">How did you come to know of Monexo</label>
                {/* <select type="select" id="monexo" name="monexo" >
                    <option value="" disabled selected>Select answer</option>
                </select> */}
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={knowMonexo}
                value={howknowMonexo} 
                sx={{ width: 430 }}
                onChange={howtoknowMonexoHandler}
                renderInput={(params) => <TextField {...params} label="Select Option" />}
                />

                <input type="text" id="monexo" placeholder="Enter Other medium" name="monexo" value={howknowMonexoRemark}  onChange={howtoknowMonexoRemarkHandler} />

            </form>

            <div className="line14"></div>

            <form className="form-inline" >
                <label for="city">What is the name of the city or town that you are currently living</label>
                {/* <select type="select" id="city" name="city" >
                    <option value="" disabled selected>Select City </option>
                </select> */}

                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={citylist}
                value={cityName}
                sx={{ width: 300 }}
                onChange={cityNameHandler}
                renderInput={(params) => <TextField {...params} label="Select City" />}
                />

                <input type="text" id="city" placeholder="Enter Message" name="city"  value={cityNameRemark} onChange={cityNameRemarkHandler} />

            </form>

            <div className="line15"></div>

            <form className="form-inline" >
                <label for="followup">Next Follow up date </label>
                 <input type="date" id="followup"  name="followup"  value={nextfollowupDate} onChange={followupdateHandler} />
                
                <input type="text" id="followup" placeholder="Enter Message" name="followup" value={nextfollowupDateRemark} onChange={followupdateRemarkHandler}  /> 

            </form>

            <div className="line16"></div>

            <form className="form-inline" >
                <label for="followuptime">Next Follow up time in the same day </label>
                <input type="time" id="followuptime" name="followuptime" value={nextfollowupTime} onChange={followupTimeHandler} />

                <input type="text" id="followuptime" placeholder="Enter Message" name="followuptime" value={nextfollowupTimeRemark} onChange={followupTimeRemarkHandler} />

            </form>

            <div className="line17"></div>

            <form className="form-inline" >
                <label for="remark">Call Summary/Remarks </label>


                <input className="boxsize" type="text" id="remark" placeholder="Enter Message" name="remark" value={callRemark} onChange={callRemarkHandler} />


            </form>

            <div className="line18"></div>



            {/* <Button  size="lg" >Success </Button> */}

            <Button className='Sbtn' onClick={submittingForm} >Submit</Button>



        </div>








    );
}




export default QuestionT