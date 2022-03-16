import * as React from 'react';

import "./cred.scss";

import { Button } from "@material-ui/core";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useCollapse from 'react-collapsed';


const Section = (props) =>{
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };



    const config = {
        defaultExpanded: props.defaultExpanded || false,
        // collapsedHeight: props.collapsedHeight || 
    };

// function Section(props) {
//     const [open, setOpen] = React.useState(true);
//     const handleClick = () => {
//         setOpen(!open);

//     };

//     const config = {
//         defaultExpanded: props.defaultExpanded || false,
//         collapsedHeight: props.collapsedHeight || 0
//     };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    return (
        <div className="collapsible">
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


const CustomerInformation = () =>{

    return (
        <div>
               <Section title="Customer Information" >
                <form className="form-inlinew" >
                    <label >Customer ID</label>

                    <span>LAP-000312549</span>

                    <label  >Pan Number</label>

                    <span className='red'>BQus000312549</span>

                </form>


                <form className="form-inlinew" >
                    <label >Existing Customer </label>

                    <span>Yes</span>

                    <label >Driving Licence</label>

                    <span>Yes</span>

                </form>

                <form className="form-inlinew" >
                    <label >Application ID</label>

                    <span>BRI-123456</span>

                    <label >Voter ID</label>

                    <span>BRI-123456</span>

                </form>


                <form className="form-inlinew" >
                    <label >Loan Application ID</label>

                    <span>56849705</span>

                    <label >Borrower Company/College Name</label>

                    <span>56849705</span>

                </form>


                <form className="form-inlinew" >
                    <label >Borrower Employment Status</label>

                    <span>Status</span>

                    <label >Official E-mail ID</label>

                    <span>Status</span>

                </form>

                <form className="form-inlinew" >
                    <label >T&c Acceptance</label>

                    <span>LAP-000312549</span>

                    <label >Personal E-mail Id</label>

                    <span>LAP-000312549</span>

                </form>

                <form className="form-inlinew" >
                    <label >First Name</label>

                    <span>LAP-000312549</span>

                    <label >E-mail ID Verified</label>

                    <span>Status</span>

                </form>
                <form className="form-inlinew" >
                    <label >Last Name</label>

                    <span>Status</span>

                    <label >Mobile Number</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >Gender</label>

                    <span>10-10-2021</span>

                    <label >Mobile OTP Verified</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >Father's Name</label>

                    <span>LAP-000312549</span>

                    <label >Application Permission Log</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >Parent Contact Number</label>

                    <span>LAP-000312549</span>

                    <label >IMIE Number</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >Date of Birth</label>

                    <span>LAP-000312549</span>

                    <label >Instrument Geo LAT</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >Age</label>

                    <span>LAP-000312549</span>

                    <label >Instrument Geo LONG</label>

                    <span>LAP-000312549</span>

                </form>
                <form className="form-inlinew" >
                    <label >Aadhar Number</label>

                    <span>LAP-000312549</span>


                </form>

            </Section>
        </div>
    )
}

export default CustomerInformation;