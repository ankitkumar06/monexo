import * as React from 'react';

import "./cred.scss";

import { Button } from "@material-ui/core";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useCollapse from 'react-collapsed';
import { useEffect ,useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import env from '../../enviorment.json';


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
    const token = useSelector((state)=>state.authRedux.token)
    const customerId = useSelector((state)=>state.custRedux.customerId)
    const [rows, setRowsData] = useState([]);

    const [customerIdVal , setCustomerIdVal] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [existingCustomer, setExistingCustomer] = useState('');
    const [drivingLicence, setDrivingLicence] = useState('');
    const [applicationId, setApplicationId] = useState('');
    const [voterId, setVoterId] = useState('');
    const [loanApplicationId, setLoanApplicationId] = useState('');
    const [borrowerCompanyCollege, setBorrowerCompanyCollege] = useState('');
    const [borrowEmploymentStatus, setBorrowEmploymentStatus] = useState('');
    const [officeEmailId, setOfficeEmailId] = useState('');
    const [TCAcceptance, setTCAcceptance] = useState('');
    const [personalEmailId, setPersonalEmailId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [emailIdVerified, setEmailIdVerified] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [gender, setGender] = useState('');
    const [mobileOTPVerified, setMobileOTPVerified] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [applicationPermissionLog, setApplicationPermissionLog] = useState('');
    const [parentContactNumber, setParentContactNumber] = useState('');
    const [IMIENumber, setIMIENumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [InstrumentGeoLAT, setInstrumentGeoLAT] = useState('');
    const [age, setAge] = useState('');
    const [InstrumentGeoLONG, setInstrumentGeoLONG] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');

    const getCustomerInformation = async()=>{
        try {
            let valrequired = {
                customer_id:customerId
            }
              await axios.post(env.apiUrl + 'api/teleservice/customer-info/',valrequired,
              {
                 headers: {"Authorization" : `Bearer ${token}`}
      
              }).then(res =>{
                let rowsval = res.data.response 
                setRowsData(rowsval)
                setCustomerIdVal(res.data.response[0].id)
                setPanNumber(res.data.response[0].pan_number)
                setPersonalEmailId(res.data.response[0].personal_email_id)
                setFirstName(res.data.response[0].firstName)
                setLastName(res.data.response[0].lastName)
                setMobileNumber(res.data.response[0].mobile_number)
                setGender(res.data.response[0].gender)
                setFatherName(res.data.response[0].fathers_name)
                setDateOfBirth(res.data.response[0].dob)
                setAadharNumber(res.data.response[0].aadhar_number)
                setBorrowerCompanyCollege(res.data.response[0].borrower_comp_clg_name)
                setOfficeEmailId(res.data.response[0].official_email_id)
                setParentContactNumber(res.data.response[0].parent_contact_number)
                setInstrumentGeoLAT(res.data.response[0].instrument_geo_lat)
                setInstrumentGeoLONG(res.data.response[0].instrument_geo_long)
                setIMIENumber(res.data.response[0].imie_number)
                setLoanApplicationId(res.data.response[0].loan_application_id)
                setExistingCustomer(res.data.response[0].existing_customer)
                setApplicationId(res.data.response[0].application_id)
                setBorrowEmploymentStatus(res.data.response[0].borrower_employment_status)
                setTCAcceptance(res.data.response[0].tc_acceptance)
                setEmailIdVerified(res.data.response[0].email_id_verified)
                setMobileOTPVerified(res.data.response[0].mobile_otp_verified)
                setApplicationPermissionLog(res.data.response[0].application_permission_log)
                setDrivingLicence(res.data.response[0].driving_licence)
                setVoterId(res.data.response[0].voter_id)
                setAge(res.data.response[0].age)
              })
          }catch (error) {
              console.log(error)
            }
    }


    useEffect(() =>{   
        getCustomerInformation()
      },[])

    return (
        <div>
               <Section title="Customer Information" >
                <form className="form-inlinew" >
                    <label >Customer ID</label>

                    <span>{customerIdVal}</span>

                    <label  >Pan Number</label>

                    <span className='red'>{panNumber}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Existing Customer </label>

                    <span>{existingCustomer}</span>

                    <label >Driving Licence</label>

                    <span>{drivingLicence}</span>

                </form>

                <form className="form-inlinew" >
                    <label >Application ID</label>

                    <span>{applicationId}</span>

                    <label >Voter ID</label>

                    <span>{voterId}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Loan Application ID</label>

                    <span>{loanApplicationId}</span>

                    <label >Borrower Company/College Name</label>

                    <span>{borrowerCompanyCollege}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Borrower Employment Status</label>

                    <span>{borrowEmploymentStatus}</span>

                    <label >Official E-mail ID</label>

                    <span>{officeEmailId}</span>

                </form>

                <form className="form-inlinew" >
                    <label >T&c Acceptance</label>

                    <span>{TCAcceptance}</span>

                    <label >Personal E-mail Id</label>

                    <span>{personalEmailId}</span>

                </form>

                <form className="form-inlinew" >
                    <label >First Name</label>

                    <span>{firstName}</span>

                    <label >E-mail ID Verified</label>

                    <span>{emailIdVerified}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Last Name</label>

                    <span>{lastName}</span>

                    <label >Mobile Number</label>

                    <span>{mobileNumber}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Gender</label>

                    <span>{gender}</span>

                    <label >Mobile OTP Verified</label>

                    <span>{mobileOTPVerified}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Father's Name</label>

                    <span>{fatherName}</span>

                    <label >Application Permission Log</label>

                    <span>{applicationPermissionLog}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Parent Contact Number</label>

                    <span>{parentContactNumber}</span>

                    <label >IMIE Number</label>

                    <span>{IMIENumber}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Date of Birth</label>

                    <span>{dateOfBirth}</span>

                    <label >Instrument Geo LAT</label>

                    <span>{InstrumentGeoLAT}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Age</label>

                    <span>{age}</span>

                    <label >Instrument Geo LONG</label>

                    <span>{InstrumentGeoLONG}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Aadhar Number</label>

                    <span>{aadharNumber}</span>


                </form>

            </Section>
        </div>
    )
}

export default CustomerInformation;