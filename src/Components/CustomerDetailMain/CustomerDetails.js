import React from "react";

import classes from "./CustomerDetails.module.css";

import {

    Grid,

    Paper,

    TextField,

    Button,

    Typography,

    Link,

  } from "@material-ui/core";

  import ButtonBase from '@mui/material/ButtonBase';

  import { styled } from '@mui/material/styles';

  import image from "../../assets/images/avtar.png";
  import { useEffect ,useState} from "react";
  import { useSelector } from "react-redux";
  import axios from "axios";
import env from "../../enviorment.json";



const CustomerDetails = () =>{

  const token = useSelector((state) => state.authRedux.token)
  const customerId = useSelector((state)=>state.custRedux.customerId)
  const [custIDval, setcustID] = useState('-');
  const [custNameval, setcustName] = useState('-');
  const [appIDval, setappID] = useState('-');
  const [laonIDval, setlaonID] = useState('-');
  const [occupation, setoccupation] = useState('-');


  const breadcrumHandler = async ()=>{

    try {
      let valrequired = {
        customer_id: customerId
      }
      await axios.post(env.apiUrl + 'api/teleservice/getbreadcrumData/', valrequired,
          {
              headers: { "Authorization": `Bearer ${token}` }

          }).then(res => {
              // console.log("demo url" + res.data.response.response)
              let rowsval = res.data.response
              console.log("response"+rowsval)
              setlaonID(rowsval.loan_application_id)
              setoccupation(rowsval.custType)
              setappID(rowsval.application_id)
          })
  } catch (error) {
      console.log(error)
  }
}




  useEffect(() =>{
    const token =localStorage.getItem("token")
    const a = localStorage.getItem("custID")
    setcustID(a)
    let b = localStorage.getItem("custName")
    setcustName(b)
    let c = localStorage.getItem("appID")
    setappID(c)
    console.log(a)
    breadcrumHandler();

  },[])

    return(
    <div className={classes.header2}>

    <Grid container >

        <Grid item xs={12} sm container>

          <Grid item xs container direction="row" className={classes.cust_info_rectangle}>

            <Grid item xs >

                <img className={classes.img} alt="complex" src={image} />        

            </Grid>

                <Grid item xs direction="column">

                    <div  className={classes.customer_ID}>

                         Customer ID

                    </div>

                    <div className={classes.cust_head_value}>

                        {custIDval}

                    </div>                      

                </Grid>

                <Grid item xs direction="column">   

                    <div className={classes.cust_name}>

                          Customer Name

                    </div>

                    <div className={classes.cust_name_value}>

                            {custNameval}

                    </div>      

                </Grid>

                <Grid item xs direction="column">

                    <div className={classes.app_number}>

                         Application Number

                    </div>

                    <div className={classes.app_number_value}>

                         {appIDval}

                    </div>           

                </Grid>

                <Grid item xs direction="column">  
                    <div className={classes.load_app_ID}>
                    Loan Application ID
                    </div>
                    <div className={classes.load_app_ID_value}>
                        {laonIDval}
                    </div>         
                </Grid>
                <Grid item xs direction="column">  
                <div className={classes.occuptionCss}>
                Occupation
                </div>
               <div className={classes.occuptionCss_value}>
                    {occupation}
                </div>         
                </Grid>

          </Grid>

        </Grid>

      </Grid>


        </div>

    );

}

export default CustomerDetails;