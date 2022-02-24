import logo from './logo.svg';
import './App.css';
import Login from './Components/LoginComponent/Login';
import CustomerDetails from './Components/CustomerDetailMain/CustomerDetails';
import MainDashboard  from './Components/DashboardUi/MainDashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
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
    <Router >
      <div>
      <Routes>
              <Route exact path="/" element={ <Login />} />
              <Route exact path="/dashboard" element={ <MainDashboard />} />
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
