import React from "react";
import Header from "./Header";
import Search from "./Search";


const MainDashboard =(props)=>{
    return(
        <div>
            <Header usersName={props.usersName} />
            <Search/>
            
        </div>
    )
}
export default MainDashboard