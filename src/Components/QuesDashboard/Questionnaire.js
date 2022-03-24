import React from "react";
import Header from "../DashboardUi/Header";
import CustomerDetails from "../CustomerDetailMain/CustomerDetails";
import QuesModule from "./QuesModule";

//here in belwo Component we import all other component so we can render all at same page
const Questionnaire =(props)=>{
    return(
        <div>
            <Header usersName={props.usersName} />
            <CustomerDetails usersName={props.usersName} />
            <QuesModule usersName={props.usersName} />
           
            
        </div>
    )
}
export default Questionnaire