import * as React from 'react';
import PropTypes from 'prop-types';

import { useEffect, useCallback } from "react";
import axios from 'axios';

import { useState } from "react";


import * as Yup from 'yup'

import { Container, Col, Button } from 'react-bootstrap'
import "./ques.scss";

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';




const QuestionT = (props) => {

    const [value, setValue] = React.useState(null);



    let storetempdata = [];



    // const initialValues = {

    // };
    // const abc= () => {
    //     ('#datet').datetimepicker({
    //         viewMode: 'years'
    //     });
    // };




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

                <span>{new Date().toLocaleString("en-US", { day: '2-digit', month: '2-digit', year: '2-digit' })}</span>

                <input type="text" id="text" placeholder="Enter Message" name="date" />

            </form>

            <div className="line2"></div>

            <form className="form-inline" >
                <label for="call">Was call to customer successful ?</label>
                <select type="select" id="call" name="call" >
                    <option value="" disabled selected>Select Option</option>
                </select>

                <input type="text" id="call" placeholder="Enter Message" name="call" />


            </form>

            <div className="line3"></div>

            <form className="form-inline" >
                <label for="nocall">Reason for call to customer not successful </label>
                <select type="select" id="nocall" name="nocall" >
                    <option value="" disabled selected>Select Option</option>
                </select>

                <input type="text" id="nocall" placeholder="Enter Message" name="nocall" />

            </form>

            <div className="line4"></div>

            <form className="form-inline" >
                <label for="org">What is the name of the organization the customer is working for </label>


                <input type="text" id="org" placeholder="Enter organization name" name="org" />


            </form>

            <div className="line5"></div>

            <form className="form-inline" >
                <label for="sal">What is your Net Salary </label>


                <input type="text" id="sal" placeholder="Enter Net Salary" name="sal" />


            </form>

            <div className="line6"></div>

            <form className="form-inline" >
                <label for="payslip">Do you get a monthly pay slip? </label>
                <select type="select" id="payslip" name="payslip" >
                    <option value="" disabled selected>Select Option</option>
                </select>

                <input type="text" id="payslip" placeholder="Enter Message" name="payslip" />


            </form>

            <div className="line7"></div>

            <form className="form-inline" >
                <label for="intbank">Do you have internet banking facility? </label>
                <select type="select" id="intbank" name="intbank" >
                    <option value="" disabled selected>Select bank</option>
                </select>

            </form>

            <div className="line8"></div>

            <form className="form-inline" >
                <label for="salcre">To which bank is your salary being credited </label>
                <select type="select" id="salcre" name="salcre" >
                    <option value="" disabled selected>Select Option</option>
                </select>

            </form>

            <div className="line9"></div>

            <form className="form-inline" >
                <label for="icard">Do you have Company I card?</label>
                <select type="select" id="icard" name="icard" >
                    <option value="" disabled selected>Select Option</option>
                </select>

            </form>

            <div className="line11"></div>

            <form className="form-inline" >
                <label for="emailid">Do you have company email ID? </label>
                <select type="select" id="emailid" name="emailid" >
                    <option value="" disabled selected>Select Option</option>
                </select>

            </form>

            <div className="line12"></div>

            <form className="form-inline" >
                <label for="selfemp">Is customer Self Employed </label>
                <select type="select" id="selfemp" name="selfemp" >
                    <option value="" disabled selected>Select Option</option>
                </select>

            </form>

            <div className="line13"></div>

            <form className="form-inline" >
                <label for="monexo">How did you come to know of Monexo</label>
                <select type="select" id="monexo" name="monexo" >
                    <option value="" disabled selected>Select answer</option>
                </select>

                <input type="text" id="monexo" placeholder="Enter Other medium" name="monexo" />

            </form>

            <div className="line14"></div>

            <form className="form-inline" >
                <label for="city">What is the name of the city or town that you are currently living</label>
                <select type="select" id="city" name="city" >
                    <option value="" disabled selected>Select City </option>
                </select>

                <input type="text" id="city" placeholder="Enter Message" name="city" />

            </form>

            <div className="line15"></div>

            <form className="form-inline" >
                <label for="followup">Next Follow up date </label>
                 <input type="date" id="followup"  name="followup" />
                
                <input type="text" id="followup" placeholder="Enter Message" name="followup" /> 
                {/* <label for="followup">Next Follow up date </label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker

                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <input type="text" id="followup" placeholder="Enter Message" name="followup" /> */}


            </form>

            <div className="line16"></div>

            <form className="form-inline" >
                <label for="followuptime">Next Follow up time in the same day </label>
                <input type="time" id="followuptime" name="followuptime" />

                <input type="text" id="followuptime" placeholder="Enter Message" name="followuptime" />

            </form>

            <div className="line17"></div>

            <form className="form-inline" >
                <label for="remark">Call Summary/Remarks </label>


                <input className="boxsize" type="text" id="remark" placeholder="Enter Message" name="remark" />


            </form>

            <div className="line18"></div>



            {/* <Button  size="lg" >Success </Button> */}

            <Button className='Sbtn' type='submit'>Submit</Button>



        </div>








    );
}




export default QuestionT