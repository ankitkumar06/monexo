import * as React from 'react';
import PropTypes from 'prop-types';
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
    const token = useSelector((state)=>state.authRedux.token)
    const customerId = useSelector((state)=>state.custRedux.customerId)

    const [livelinessScore , setlivelinessScore] = useState('');
    const [faceDetectionVerifid, setfaceDetectionVerified] = useState('');
    const [livelinessStatus, setlivelinessStatus] = useState('');
    const [adharUploadGeoLocationLAT, setadharUploadGeoLocationLAT] = useState('');
    const [faceMatchScore, setfaceMatchScore] = useState('');
    const [adharUploadGeoLocationLONG, setadharUploadGeoLocationLONG] = useState('');
    const [faceMatchStatus, setfaceMatchStatus] = useState('');
    const [adharUID, setadharUID] = useState('');
    const [adharUploadDateTime, setadharUploadDateTime] = useState('');
    const [adharDOB, setadharDOB] = useState('');
    const [adharName, setadharName] = useState('');
    const [adharYOB, setadharYOB] = useState('');
    const [adharGender, setadharGender] = useState('');
    const [adharQRDate, setadharQRDate] = useState('');
    const [adharAddress, setadharAddress] = useState('');
    const [selfieUploadDateTime, setselfieUploadDateTime] = useState('');

    const [livelinessScoreVKYC, setlivelinessScoreVKYC] = useState('');
    const [isCustomerInIndia, setisCustomerInIndia] = useState('');
    const [adharStatus, setadharStatus] = useState('');
    const [vkycGeoLocationLAT, setvkycGeoLocationLAT] = useState('');
    const [adharMatchScore, setadharMatchScore] = useState('');
    const [vkycGeoLocationLONG, setvkycGeoLocationLONG] = useState('');
    const [panStatus, setpanStatus] = useState('');
    const [nameMatch, setnameMatch] = useState('');
    const [panMatchScore, setpanMatchScore] = useState('');
    const [allMatch, setallMatch] = useState('');
    const [OTPstatusAgentDecision, setOTPstatusAgentDecision] = useState('');
    const [KYCStatus, setKYCStatus] = useState('');
    const [faceDetectionVerifiedByAgent, setfaceDetectionVerifiedByAgent] = useState('');
    const [selfieUploadDateTimeVKYC, setselfieUploadDateTimeVKYC] = useState('');


    const getKYCInfo =async  () =>{
        try {
            let valrequired = {
                customer_id:customerId
            }
              await axios.post(env.apiUrl + 'api/teleservice/kyc-information/',valrequired,
              {
                 headers: {"Authorization" : `Bearer ${token}`}
      
              }).then(res =>{
                // console.log("demo url" + res.data.response.response)
                let rowsval = res.data.response 
                console.log(rowsval)
                setlivelinessScore(res.data.response[0].live_ness_score)
                setfaceDetectionVerified(res.data.response[0].face_detection_verified)
                setlivelinessStatus(res.data.response[0].live_ness_status)
                setadharUploadGeoLocationLAT(res.data.response[0].aadhar_upload_geo_location_lat)
                setfaceMatchScore(res.data.response[0].face_match_score)
                setadharUploadGeoLocationLONG(res.data.response[0].aadhar_upload_geo_location_long)
                setfaceMatchStatus(res.data.response[0].face_match_status)
                setadharUID(res.data.response[0].aadhar_uid)
                setadharUploadDateTime(res.data.response[0].aadhar_upload_datetime)
                setadharDOB(res.data.response[0].aadhar_dob)
                setadharName(res.data.response[0].aadhar_name)
                setadharYOB(res.data.response[0].aadhar_yob)
                setadharGender(res.data.response[0].aadhar_gender)
                setadharQRDate(res.data.response[0].aadhar_qr_data)
                setadharAddress(res.data.response[0].aadhar_address)
                setselfieUploadDateTime(res.data.response[0].selfie_upload_datetime)

                setlivelinessScoreVKYC(res.data.response[0].live_ness_score)
                setisCustomerInIndia(res.data.response[0].is_cutomer_in_india)
                setadharStatus(res.data.response[0].aadhar_status)
                setvkycGeoLocationLAT(res.data.response[0].vkyc_geo_location_lat)
                setadharMatchScore(res.data.response[0].aadhar_match_score)
                setvkycGeoLocationLONG(res.data.response[0].vkyc_geo_location_long)
                setpanStatus(res.data.response[0].pan_status)
                setnameMatch(res.data.response[0].name_match)
                setpanMatchScore(res.data.response[0].pan_match_score)
                setallMatch(res.data.response[0].all_match)
                setOTPstatusAgentDecision(res.data.response[0].otp_status_agent_decision)
                setKYCStatus(res.data.response[0].kyc_status)
                setfaceDetectionVerifiedByAgent(res.data.response[0].face_detection_verified_by_agent)
                setselfieUploadDateTimeVKYC(res.data.response[0].kyc_response)
               
              })
        
            // } 
          }catch (error) {
              console.log(error)
            }

    }

    useEffect(() =>{   
        getKYCInfo()
      },[])


    return (

        

        <div >

            <Section title="EKYC Details">
                <form className="form-inlinew" >
                    <label >Liveliness Score</label>

                    <span>{livelinessScore}</span>

                    <label >Face detection Verified</label>

                    <span>{faceDetectionVerifid}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Liveliness Status</label>

                    <span>{livelinessStatus}</span>

                    <label >Aadhar Upload Geo Location-Lat</label>

                    <span>{adharUploadGeoLocationLAT}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Face match score</label>

                    <span>{faceMatchScore}</span>

                    <label >Aadhar Upload Geo Location-Long</label>

                    <span>{adharUploadGeoLocationLONG}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Face match status </label>

                    <span>{faceMatchStatus}</span>

                    <label >Aadhar Uid</label>

                    <span>{adharUID}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Aadhar Upload Date/Time</label>

                    <span>{adharUploadDateTime}</span>

                    <label >Aadhar DOB</label>

                    <span>{adharDOB}</span>

                </form>

                <form className="form-inlinew" >
                    <label >Aadhar Name</label>

                    <span>{adharName}</span>

                    <label >Aadhar YOB</label>

                    <span>{adharYOB}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Aadhar Gender</label>

                    <span>{adharGender}</span>

                    <label >Aadhar QR Data</label>

                    <span>{adharQRDate}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Aadhar Address</label>

                    <span>{adharAddress}</span>

                    <label >Selfie Upload Date/Time</label>

                    <span>{selfieUploadDateTime}</span>

                </form>

            </Section>
            <Section title="VKYC Details" >
            <form className="form-inlinew" >
                    <label >Liveliness Score</label>

                    <span>{livelinessScoreVKYC}</span>

                    <label >Is customer in India</label>

                    <span>{isCustomerInIndia}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Aadhar Status</label>

                    <span>{adharStatus}</span>

                    <label >VKYC Geo Location - Lat</label>

                    <span>{vkycGeoLocationLAT}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Aadhar Match Score</label>

                    <span>{adharMatchScore}</span>

                    <label >VKYC Geo Location-Long</label>

                    <span>{vkycGeoLocationLONG}</span>

                </form>


                <form className="form-inlinew" >
                    <label >PAN Status</label>

                    <span>{panStatus}</span>

                    <label >Name Match</label>

                    <span>{nameMatch}</span>

                </form>


                <form className="form-inlinew" >
                    <label >PAN Match Score</label>

                    <span>{panMatchScore}</span>

                    <label >All Match</label>

                    <span>{allMatch}</span>

                </form>

                <form className="form-inlinew" >
                    <label >OTP Status Agent Decision</label>

                    <span>{OTPstatusAgentDecision}</span>

                    <label >KYC Status</label>

                    <span>{KYCStatus}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Face detection Verified by Agent</label>

                    <span>{faceDetectionVerifiedByAgent}</span>

                    <label >KYC Response Date</label>

                        <span>{selfieUploadDateTimeVKYC}</span>

                </form>

            </Section>
        </div>
    );
}




export default KycInfo;