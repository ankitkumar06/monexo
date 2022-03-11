import React from "react";
import Header from "../DashboardUi/Header";
import CustomerDetails from "../CustomerDetailMain/CustomerDetails";
import QuesModule from "./QuesModule";


const Questionnaire =(props)=>{
    return(
        <div>
            <Header usersName={props.usersName} />
            <CustomerDetails usersName={props.usersName} />
            <QuesModule />
           
            
        </div>
    )
}
export default Questionnaire