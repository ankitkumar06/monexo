// import logo from './logo.svg';

import './App.css';

import Login from './Components/LoginComponent/Login';

import CustomerDetails from './Components/CustomerDetailMain/CustomerDetails';

import MainDashboard  from './Components/DashboardUi/MainDashboard';

import Questionnaire  from './Components/QuesDashboard/Questionnaire';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from "react";



function App() {


  const [usersName, setUsersName] = useState("Nikhil");


  const usersNamehandler = (value)=>{

    setUsersName(value)

    // setUsersName((prevExpense) => {

    //   return [expen , ...prevExpense]

    // });

  }

  

  return (

    <div className="App">
     

      {/* <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>

          Edit <code>src/App.js</code> and save to reload.

        </p>

        <a

          className="App-link"

          href="https://reactjs.org"

          target="_blank"

          rel="noopener noreferrer"

        >

          Learn React

        </a>

      </header> */}


      {/* <Login /> */}

    

    {/* <Login /> */}

    {/* <Prac/> */}
  

    <Router>

      <div>

      <Routes>

              <Route exact path="/" element={ <Login onChange={usersNamehandler} />} />

              <Route exact path="/dashboard" element={ <MainDashboard usersName={usersName} />} />

              <Route exact path="/questionnaire" element={ <Questionnaire usersName={usersName} />} />

              {/* <Route exact path="/admin" render={(props) => <ProductAdmin {...props} auth={authProps} />} /> */}

              </Routes>

          </div>


      </Router>
      
    {/* <MainDashboard /> */}


      {/* <CustomerDetails /> */}


     
    </div>

  );

}


export default App;