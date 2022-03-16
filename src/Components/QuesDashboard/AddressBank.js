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
                    <Button onClick={handleClick} style={{ borderBlockColor: '#2A9134', color: '#2A9134', paddingRight: '12px', paddingLeft: '12px', paddingBottom: '1px', maxWidth: '5px', minWidth: '5px', top: '15px' }} variant="outlined" >
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



const AddressBank = () => {

    return (

        <div >

            <Section title="Address Information">
                <form className="form-inlinew" >
                    <label >Address Type</label>

                    <span>Residence</span>

                    <label >Active</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >Flat No/ Block/Buldg Name/Street Name</label>

                    <span>Yes</span>

                    <label >Locality</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >City</label>

                    <span>BRI-123456</span>

                    <label >Sub Locality</label>

                    <span>BRI-123456</span>

                </form>


                <form className="form-inlinew" >
                    <label >State </label>

                    <span>MH</span>

                    <label >Pincode</label>

                    <span></span>

                </form>


                <form className="form-inlinew" >
                    <label >Address Type</label>

                    <span>Office/College</span>

                    <label >Active</label>

                    <span>Yes</span>

                </form>

                <form className="form-inlinew" >
                    <label >Flat No/ Block/Buldg Name/Street Name</label>

                    <span>Yes</span>

                    <label >Locality</label>

                    <span>Yes</span>

                </form>


                <form className="form-inlinew" >
                    <label >City</label>

                    <span>BRI-123456</span>

                    <label >Sub Locality</label>

                    <span>BRI-123456</span>

                </form>


                <form className="form-inlinew" >
                    <label >State </label>

                    <span>MH</span>

                    <label >Pincode</label>

                    <span></span>

                </form>

            </Section>
            <Section title="Bank Information" >
                <form className="form-inlinew" >
                    <label >Bank Name</label>

                    <span>LAP-000312549</span>

                    <label >Active</label>

                    <span>LAP-000312549</span>

                </form>


                <form className="form-inlinew" >
                    <label >Account Number</label>

                    <span>1234234549</span>

                    <label >Bank Branch Name</label>

                    <span>Pune</span>

                </form>


                <form className="form-inlinew" >
                    <label >SMS data read</label>

                    <span>Yes</span>

                    <label >E verification done </label>

                    <span>Yes</span>

                </form>
            </Section>
        </div>
    );
}




export default AddressBank;