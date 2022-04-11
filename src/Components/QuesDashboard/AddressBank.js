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

//Here this belwo function used for to show collapse functionality
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


// In belwo function we use above function to pass as prop in belwo component
const AddressBank = () => {
    const token = useSelector((state)=>state.authRedux.token)
    const customerId = useSelector((state)=>state.custRedux.customerId)

    const [addressType , setaddressType] = useState('');
    const [active, setactive] = useState('');
    const [flatBlockBildgStreet, setflatBlockBildgStreet] = useState('');
    const [locality, setlocality] = useState('');
    const [city, setcity] = useState('');
    const [subLocality, setsubLocality] = useState('');
    const [state, setstate] = useState('');
    const [pincode, setpincode] = useState('');
    const [bankName, setbankName] = useState('');
    const [ActiveBank, setActiveBank] = useState('');
    const [Acc_number, setAcc_number] = useState('');
    const [bank_branch, setbank_branch] = useState('');
    const [SMS_dataRead, setSMS_dataRead] = useState('');
    const [eVerificationDone, seteVerificationDone] = useState('');
 

    const getCustomerAddressBankInfo =async  () =>{
        try {
            let valrequired = {
                customer_id:customerId
            }
              await axios.post(env.apiUrl + 'api/teleservice/address-bank-information/',valrequired,
              {
                 headers: {"Authorization" : `Bearer ${token}`}
      
              }).then(res =>{
                // console.log("demo url" + res.data.response.response)
                let rowsval = res.data.response 
                console.log(rowsval)
                setaddressType(res.data.response[0].address_type)
                setactive(res.data.response[0].active)
                setlocality(res.data.response[0].locality)
                setsubLocality(res.data.response[0].subLocality)
                setflatBlockBildgStreet(res.data.response[0].flat_block_buldg_street)
                setcity(res.data.response[0].city)
                setstate(res.data.response[0].state)
                setpincode(res.data.response[0].pincode)
                setSMS_dataRead(res.data.response[0].sms_data_read)
                setbankName(res.data.response[0].bank_name)
                setAcc_number(res.data.response[0].acc_number)
                setbank_branch(res.data.response[0].bank_branch_name)
                seteVerificationDone(res.data.response[0].eVarificationDone)
                setActiveBank(res.data.response[0].bankactive)
              })
        
            // } 
          }catch (error) {
              console.log(error)
            }

    }

    useEffect(() =>{   

        getCustomerAddressBankInfo()
      },[])

    return (

        <div >

            <Section title="Address Information">
            {/* {props.items.map((expense) => (
      <Expenseitem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))} */}
                <form className="form-inlinew" >
                    <label >Address Type</label>

                    <span>{addressType}</span>

                    <label >Active</label>

                    <span>{active}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Flat No/ Block/Buldg Name/Street Name</label>

                    <span>{flatBlockBildgStreet}</span>

                    <label >Locality</label>

                    <span>{locality}</span>

                </form>


                <form className="form-inlinew" >
                    <label >City</label>

                    <span>{city}</span>

                    <label >Sub Locality</label>

                    <span>{subLocality}</span>

                </form>


                <form className="form-inlinew" >
                    <label >State </label>

                    <span>{state}</span>

                    <label >Pincode</label>

                    <span>{pincode}</span>

                </form>



            </Section>
            <Section title="Bank Information" >
                <form className="form-inlinew" >
                    <label >Bank Name</label>

                    <span>{bankName}</span>

                    <label >Active</label>

                    <span>{ActiveBank}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Account Number</label>

                    <span>{Acc_number}</span>

                    <label >Bank Branch Name</label>

                    <span>{bank_branch}</span>

                </form>


                <form className="form-inlinew" >
                    <label >SMS data read</label>

                    <span>{SMS_dataRead}</span>

                    <label >E verification done </label>

                    <span>{eVerificationDone}</span>

                </form>
            </Section>
        </div>
    );
}




export default AddressBank;
