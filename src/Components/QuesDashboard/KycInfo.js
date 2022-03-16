import * as React from 'react';
import PropTypes from 'prop-types';

import { useEffect, useCallback } from "react";
import axios from 'axios';
import { useState } from "react";
import * as Yup from 'yup'
import { Container, Col, Dropdown } from 'react-bootstrap'
import "./cred.scss";

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Button } from "@material-ui/core";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ArrowDropDownOutlined } from '@mui/icons-material';
import useCollapse from 'react-collapsed';

 const Section = (props) =>{
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);

    };

    const config = {
        defaultExpanded: props.defaultExpanded || false,
        // collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    return (
        <div className="collapsible" onClick={handleClick}>
            <div className="header" {...getToggleProps()}>
                <div className="title">{props.title}</div>
                <div className="icon">
                    <Button  style={{ borderBlockColor: '#2A9134', color: '#2A9134', paddingRight: '12px', paddingLeft: '12px', paddingBottom: '1px', maxWidth: '5px', minWidth: '5px', top: '15px' }} variant="outlined" >
                        {open ? <ExpandMore /> : <ExpandLess />}
                    </Button>
                </div>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}



const KycInfo = () => {

    return (

        <div >

            <Section title="EKYC Details">
                <form className="form-inlinew" >
                    <label >Liveliness Score</label>

                    <span>12345678901</span>

                    <label >Face detection Verified</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >Liveliness Status</label>

                    <span>12345678901</span>

                    <label >Aadhar Upload Geo Location-Lat</label>

                    <span>Pune</span>

                </form>


                <form className="form-inlinew" >
                    <label >Face match score</label>

                    <span>Yes</span>

                    <label >Aadhar Upload Geo Location-Long</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >Face match status </label>

                    <span>Yes</span>

                    <label >Aadhar Uid</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >Aadhar Upload Date/Time</label>

                    <span>Yes</span>

                    <label >Aadhar DOB</label>

                    <span>Yes</span>

                </form>

                <form className="form-inlinew" >
                    <label >Aadhar Name</label>

                    <span>Yes</span>

                    <label >Aadhar YOB</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >Aadhar Gender</label>

                    <span>Yes</span>

                    <label >Aadhar QR Data</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >Aadhar Address</label>

                    <span>Yes</span>

                    <label >Selfie Upload Date/Time</label>

                    <span>Yes</span>

                </form>

            </Section>
            <Section title="VKYC Details" >
            <form className="form-inlinew" >
                    <label >Liveliness Score</label>

                    <span>12345678901</span>

                    <label >Is customer in India</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >Aadhar Status</label>

                    <span>12345678901</span>

                    <label >VKYC Geo Location - Lat</label>

                    <span>Pune</span>

                </form>


                <form className="form-inlinew" >
                    <label >Aadhar Match Score</label>

                    <span>Yes</span>

                    <label >VKYC Geo Location-Long</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >PAN Status</label>

                    <span>Yes</span>

                    <label >Name Match</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >PAN Match Score</label>

                    <span>Yes</span>

                    <label >All Match</label>

                    <span>Yes</span>

                </form>

                <form className="form-inlinew" >
                    <label >OTP Status Agent Decision</label>

                    <span>Yes</span>

                    <label >KYC Status</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >Face detection Verified by Agent</label>

                    <span>Yes</span>

                    <label >KYC Response Date</label>

                    <span>Yes</span>

                </form>

            </Section>
        </div>
    );
}




export default KycInfo;