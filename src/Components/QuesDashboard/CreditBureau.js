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
const CreditB = () => {

    const token = useSelector((state)=>state.authRedux.token)
    const customerId = useSelector((state)=>state.custRedux.customerId)

    const [customerIdVal , setCustomerIdVal] = useState('');
    const [bureauPull, setbureauPull] = useState('');
    const [customerName, setcustomerName] = useState('');
    const [newAccountInLast6Month, setnewAccountInLast6Month] = useState('');
    const [applicationId, setApplicationId] = useState('');
    const [loanEnquiriInLast6Month, setloanEnquiriInLast6Month] = useState('');
    const [loanApplicationId, setLoanApplicationId] = useState('');
    const [totalUnsecureLoanOutstanding, settotalUnsecureLoanOutstanding] = useState('');
    const [bureauPullval, setbureauPullval] = useState('');
    const [totalsecureLoanOutstanding, settotalsecureLoanOutstanding] = useState('');
    const [bureauReportId, setbureauReportId] = useState('');
    const [totalCredidCardOutstanding, settotalCredidCardOutstanding] = useState('');
    const [bureauRefernaceNum, setbureauRefernaceNum] = useState('');
    const [goldLoanPOS, setgoldLoanPOS] = useState('');
    const [bureauRequestStatus, setbureauRequestStatus] = useState('');
    const [otherLoanPOS, setotherLoanPOS] = useState('');
    const [bureauPullDate, setbureauPullDate] = useState('');
    const [newdelinquenciesinlast6month, setnewdelinquenciesinlast6month] = useState('');
    const [bureauPullResponse, setbureauPullResponse] = useState('');
    const [personalLoan, setpersonalLoan] = useState('');
    const [bureauUpdateFinalDate, setbureauUpdateFinalDate] = useState('');
    const [homeLoan, sethomeLoan] = useState('');
    const [emailIdInBureau, setemailIdInBureau] = useState('');
    const [creditcard, setcreditcard] = useState('');
    const [DOB, setDOB] = useState('');
    const [goldLoan, setgoldLoan] = useState('');
    const [pan, setPan] = useState('');
    const [otherLoan, setotherLoan] = useState('');
    const [bureauScore, setbureauScore] = useState('');
    const [creditVintage, setcreditVintage] = useState('');
    const [noOfActiveAcc, setnoOfActiveAcc] = useState('');
    const [totalBalanceAcc, settotalBalanceAcc] = useState('');
    const [noOfPastDueAcc, setnoOfPastDueAcc] = useState('');
    const [totalSanctionAmt, settotalSanctionAmt] = useState('');
    const [totalPastDue, settotalPastDue] = useState('');
    const [totalmonthlyPaymentAmt, settotalmonthlyPaymentAmt] = useState('');
    const [oldestAcc, setoldestAcc] = useState('');
    const [mostserveStatuswithin24month, setmostserveStatuswithin24month] = useState('');
    const [recentAcc, setrecentAcc] = useState('');
    const [writtenofAccounts, setwrittenofAccounts] = useState('');
    const [suitFiled, setsuitFiled] = useState('');
    const [wilFulDefault, setwilFulDefault] = useState('');
    const [settledAcc, setsettledAcc] = useState('');
    const [loassAcc, setloassAcc] = useState('');
    const [writtenOffAcc, setwrittenOffAcc] = useState('');
    const [subStandardAcc, setsubStandardAcc] = useState('');

    const getCreditBureauData =async  () =>{
        try {
    let valrequired = {
        customer_id:customerId
    }
      await axios.post(env.apiUrl + 'api/teleservice/cerdit-beaure-details/',valrequired,
      {
         headers: {"Authorization" : `Bearer ${token}`}

      }).then(res =>{
        // console.log("demo url" + res.data.response.response)
        let rowsval = res.data.response 
        console.log(rowsval)
        setCustomerIdVal(res.data.response[0].customer_id)
        setbureauPull(res.data.response[0].beaure_pull)
        setcustomerName(res.data.response[0].customer_name)
        setnewAccountInLast6Month(res.data.response[0].new_account_in_last_6_months)
        setApplicationId(res.data.response[0].application_id)
        setloanEnquiriInLast6Month(res.data.response[0].loan_enquires_in_last_6_months)
        setLoanApplicationId(res.data.response[0].loan_application_id)
        settotalUnsecureLoanOutstanding(res.data.response[0].total_unsecured_loan_outstanding)

        setbureauPullval(res.data.response[0].beaure_pull)
        settotalsecureLoanOutstanding(res.data.response[0].total_secured_loan_outstanding)
        setbureauReportId(res.data.response[0].beaure_report_id)
        settotalCredidCardOutstanding(res.data.response[0].total_credit_card_outstanding)
        setbureauRefernaceNum(res.data.response[0].beaure_reference_num)
        setgoldLoanPOS(res.data.response[0].gold_loan_pos)
        setbureauRequestStatus(res.data.response[0].beaure_request_status)
        setotherLoanPOS(res.data.response[0].other_loan_pos)
        setbureauPullDate(res.data.response[0].beaure_pull_date)
        setnewdelinquenciesinlast6month(res.data.response[0].new_delipquencies_inlast_6_months)
        setbureauPullResponse(res.data.response[0].beaure_pull_reponse)
        setpersonalLoan(res.data.response[0].personal_loan)
        setbureauUpdateFinalDate(res.data.response[0].beaure_update_final_loan)
        sethomeLoan(res.data.response[0].home_loan)
        setemailIdInBureau(res.data.response[0].email_id_in_beaure)
        setcreditcard(res.data.response[0].credit_card)
        setDOB(res.data.response[0].dob)
        setgoldLoan(res.data.response[0].gold_loan)
        setPan(res.data.response[0].pan)
        setotherLoan(res.data.response[0].other_loan)
        setbureauScore(res.data.response[0].beaure_score)
        setcreditVintage(res.data.response[0].credit_vintage)

        setnoOfActiveAcc(res.data.response[1].no_of_active_accounts)
        settotalBalanceAcc(res.data.response[1].total_balance_amount)
        setnoOfPastDueAcc(res.data.response[1].no_of_past_due_accounts)
        settotalSanctionAmt(res.data.response[1].total_sanction_amount)
        settotalPastDue(res.data.response[1].total_past_due)
        settotalmonthlyPaymentAmt(res.data.response[1].total_montly_payment_amount)
        setoldestAcc(res.data.response[1].oldest_account)
        setmostserveStatuswithin24month(res.data.response[1].most_server_status_within_24_hours)
        setrecentAcc(res.data.response[1].recent_account)
        // setwrittenofAccounts(res.data.response[1].written_of_accounts)

        setsuitFiled(res.data.response[2].suit_field)
        setwilFulDefault(res.data.response[2].willFull_default)
        setsettledAcc(res.data.response[2].settled_accounts)
        setloassAcc(res.data.response[2].loss_accounts)
        setwrittenOffAcc(res.data.response[1].written_of_accounts)
        setsubStandardAcc(res.data.response[2].sub_standard_accounts)

      })

    // } 
  }catch (error) {
      console.log(error)
    }

}

useEffect(() =>{   
    getCreditBureauData()
},[])
  

    return (

        

        <div >

            <Section title="Credit Bureau Details" >
                <form className="form-inlinew" >
                    <label >Customer ID</label>

                    <span>{customerIdVal}</span>

                    <label  >Bureau Pull</label>
                    <span>{bureauPull}</span>
                    {/* <span className='red'>{bureauPull}</span> */}

                </form>


                <form className="form-inlinew" >
                    <label >Customer Name</label>

                    <span>{customerName}</span>

                    <label >New accounts in the last 6 months</label>

                    <span>{newAccountInLast6Month}</span>

                </form>

                <form className="form-inlinew" >
                    <label >Application ID</label>

                    <span>{applicationId}</span>

                    <label >Loan enquiries in last 6 months</label>

                    <span>{loanEnquiriInLast6Month}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Loan Application ID</label>

                    <span>{loanApplicationId}</span>

                    <label >Total Unsecured loan outstanding</label>

                    <span>{totalUnsecureLoanOutstanding}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Bureau Pull</label>

                    <span>{bureauPullval}</span>

                    <label >Total Secured loan outstanding</label>

                    <span>{totalsecureLoanOutstanding}</span>

                </form>

                <form className="form-inlinew" >
                    <label >Bureau Report ID</label>

                    <span>{bureauReportId}</span>

                    <label >Total Credit card Oustanding</label>

                    <span>{totalCredidCardOutstanding}</span>

                </form>

                <form className="form-inlinew" >
                    <label >Bureau Reference Num</label>

                    <span>{bureauRefernaceNum}</span>

                    <label >Gold loan POS</label>

                    <span>{goldLoanPOS}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Bureau Request Status</label>

                    <span>{bureauRequestStatus}</span>

                    <label >Other loan POS</label>

                    <span>{otherLoanPOS}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Bureau Pull date:</label>

                    <span>{bureauPullDate}</span>

                    <label >New delinquencies in last 6 months</label>

                    <span>{newdelinquenciesinlast6month}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Bureau Pull Response</label>

                    <span>{bureauPullResponse}</span>

                    <label >Personal loan</label>

                    <span>{personalLoan}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Bureau Updated Final Date</label>

                    <span>{bureauUpdateFinalDate}</span>

                    <label >Home loan</label>

                    <span>{homeLoan}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Email id in Bureau (reported latest)</label>

                    <span>{emailIdInBureau}</span>

                    <label >Credit card</label>

                    <span>{creditcard}</span>

                </form>
                <form className="form-inlinew" >
                    <label >DOB</label>

                    <span>{DOB}</span>

                    <label >Gold Loan</label>

                    <span>{goldLoan}</span>

                </form>
                <form className="form-inlinew" >
                    <label >PAN</label>

                    <span>{pan}</span>

                    <label >Other Loan</label>

                    <span>{otherLoan}</span>

                </form>
                <form className="form-inlinew" >
                    <label >Bureau Score</label>

                    <span>{bureauScore}</span>

                    <label >Credit Vintage</label>

                    <span>{creditVintage}</span>

                </form>
            </Section>
            <Section title="Retail Accounts Summary">
                <form className="form-inlinew" >
                    <label >No Of Active Accounts</label>

                    <span>{noOfActiveAcc}</span>

                    <label >Total Balance Amount</label>

                    <span>{totalBalanceAcc}</span>

                </form>


                <form className="form-inlinew" >
                    <label >No Of Past Due Accounts :</label>

                    <span>{noOfPastDueAcc}</span>

                    <label >Total Sanction Amount</label>

                    <span>{totalSanctionAmt}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Total Past Due</label>

                    <span>{totalPastDue}</span>

                    <label >Total Monthly Payment Amount</label>

                    <span>{totalmonthlyPaymentAmt}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Oldest Account:</label>

                    <span>{oldestAcc}</span>

                    <label >Most Severe Status Within 24 Months </label>

                    <span>{mostserveStatuswithin24month}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Recent Account:</label>

                    <span>{recentAcc}</span>



                </form>
            </Section>
            <Section title="Account Status" >
                <form className="form-inlinew" >
                    <label >Suit Filed</label>

                    <span>{suitFiled}</span>

                    <label >Wilful Default</label>

                    <span>{wilFulDefault}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Settled Accounts</label>

                    <span>{settledAcc}</span>

                    <label >Loss Accounts</label>

                    <span>{loassAcc}</span>

                </form>


                <form className="form-inlinew" >
                    <label >Written off Accounts</label>

                    <span>{writtenOffAcc}</span>

                    <label >Sub-Standard Accounts</label>

                    <span>{subStandardAcc}</span>

                </form>
            </Section>
        </div>
    );
}




export default CreditB
