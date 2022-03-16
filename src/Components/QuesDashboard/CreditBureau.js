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



const CreditB = () => {

    return (

        <div >

            <Section title="Credit Bureau Details" >
                <form className="form-inlinew" >
                    <label >Customer ID</label>

                    <span>LAP-000312549</span>

                    <label  >Bureau Pull</label>

                    <span className='red'>LAP-000312549</span>

                </form>


                <form className="form-inlinew" >
                    <label >Customer Name</label>

                    <span>xyz</span>

                    <label >New accounts in the last 6 months</label>

                    <span>123</span>

                </form>

                <form className="form-inlinew" >
                    <label >Application ID</label>

                    <span>BRI-123456</span>

                    <label >Loan enquiries in last 6 months</label>

                    <span>BRI-123456</span>

                </form>


                <form className="form-inlinew" >
                    <label >Loan Application ID</label>

                    <span>56849705</span>

                    <label >Total Unsecured loan outstanding</label>

                    <span>56849705</span>

                </form>


                <form className="form-inlinew" >
                    <label >Bureau Pull</label>

                    <span>Status</span>

                    <label >Total Secured loan outstanding</label>

                    <span>Status</span>

                </form>

                <form className="form-inlinew" >
                    <label >Bureau Report ID</label>

                    <span>LAP-000312549</span>

                    <label >Total Credit card Oustanding</label>

                    <span>LAP-000312549</span>

                </form>

                <form className="form-inlinew" >
                    <label >Bureau Reference Num</label>

                    <span>LAP-000312549</span>

                    <label >Gold loan POS</label>

                    <span>Status</span>

                </form>
                <form className="form-inlinew" >
                    <label >Bureau Request Status</label>

                    <span>Status</span>

                    <label >Other loan POS</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >Bureau Pull date:</label>

                    <span>10-10-2021</span>

                    <label >New delinquencies in last 6 months</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >Bureau Pull Response</label>

                    <span>LAP-000312549</span>

                    <label >Personal loan</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >Bureau Updated Final Date</label>

                    <span>LAP-000312549</span>

                    <label >Home loan</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >Email id in Bureau (reported latest)</label>

                    <span>LAP-000312549</span>

                    <label >Credit card</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >DOB</label>

                    <span>LAP-000312549</span>

                    <label >Gold Loan</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >PAN</label>

                    <span>LAP-000312549</span>

                    <label >Other Loan</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >Bureau Score</label>

                    <span>LAP-000312549</span>

                    <label >Credit Vintage</label>

                    <span>LAP-000312549</span>

                </form>
            </Section>
            <Section title="Retail Accounts Summary">
                <form className="form-inlinew" >
                    <label >No Of Active Accounts</label>

                    <span>LAP-000312549</span>

                    <label >Total Balance Amount</label>

                    <span>LAP-000312549</span>

                </form>


                <form className="form-inlinew" >
                    <label >No Of Past Due Accounts :</label>

                    <span>549</span>

                    <label >Total Sanction Amount</label>

                    <span>2549</span>

                </form>


                <form className="form-inlinew" >
                    <label >Total Past Due</label>

                    <span>LAP-000312549</span>

                    <label >Total Monthly Payment Amount</label>

                    <span>LAP-000312549</span>

                </form>


                <form className="form-inlinew" >
                    <label >Oldest Account:</label>

                    <span>LAP-000312549</span>

                    <label >Most Severe Status Within 24 Months </label>

                    <span>LAP-000312549</span>

                </form>


                <form className="form-inlinew" >
                    <label >Recent Account:</label>

                    <span>LAP-000312549</span>



                </form>
            </Section>
            <Section title="Account Status" >
                <form className="form-inlinew" >
                    <label >Suit Filed</label>

                    <span>LAP-000312549</span>

                    <label >Wilful Default</label>

                    <span>LAP-000312549</span>

                </form>


                <form className="form-inlinew" >
                    <label >Settled Accounts</label>

                    <span>549</span>

                    <label >Loss Accounts</label>

                    <span>2549</span>

                </form>


                <form className="form-inlinew" >
                    <label >Written off Accounts</label>

                    <span>LAP-000312549</span>

                    <label >Sub-Standard Accounts</label>

                    <span>LAP-000312549</span>

                </form>
            </Section>
        </div>
    );
}




export default CreditB
