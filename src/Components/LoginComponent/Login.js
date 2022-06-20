import React, { useState,useRef } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import InputAdornment from "@material-ui/core/InputAdornment";
import ellipse from "../../assets/images/Ellipse.png";
import ndfc from "../../assets/images/nbfc-logo.png";
import monexologo from "../../assets/images/monexo-logo.png";
import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import env from '../../enviorment.json';
import setAuthToken from '../../utilities/setAuthToken'
import { authAction } from '../../store/authSlice';
import { useDispatch } from "react-redux";


const Login = (props) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const MainStyle = {};
  const div1Style = {
    backgroundColor: "white",
    height: "100vh",
    width:"786px",
   
  };
  const div2Style = { backgroundColor: "green", height: "100vh", width:"654px" };

  const image = { width: 109.65, height: 26.62, position:"absolute" , left:16, top:14.23 };
  const Line ={ position:"absolute" , left:136.93,top:14}
  const pnglogo = { width: 29.78, height: 26.62, position:"absolute" , left:145.94, top:14.23 };
  const paperStyle = {
    width: 320,
   position:"fixed",
   left:120, top:150
  };
  const btnstyle = {
    margin: "20px 0px",
    backgroundColor: "darkgreen",
    height: "60px",
    width: "379px",
  };
  const txt = {
    color: "primary",
    variant: "outlined",
    color: "secondory",
    width: "379px",
    height: "60px",
    marginTop: 20,
  };

  function emailHandler(e) {
  //   console.warn(e.target.value);
    let item = e.target.value;
    if (item ==="ankit06@gmail.com") {
      setEmailErr(false); 
    } else {
      setEmailErr(true);
    }
    setEmail(item);
  }

  function PasswordHandler(e) {
    // console.log(e.target.value);
    let item = e.target.value;
    if (item === "1234567") {
      setPassErr(false);
    } else {
      setPassErr(true);
    }
    setPassword(item);
  }
  function loginHandle(e) {
    e.preventDefault();
    if (email ==="ankit06@gmail.com" && password === "1234567") {
      navigate('/dashboard');
    } else {
      // navigate('/dashboard');
      alert("invalid...")
    }
    
    // navigate('/dashboard');
    const enteredValue = usernameRef.current.value;
    console.log(enteredValue);
    // const user = {
    //   email: email,
    //   password: password,
    // };
    // axios.post(env.apiUrl + 'api/auth/login/',user,
    // {
    //   headers:{
    //     "Content-type": "application/json",
    //  }
    // }).then(res =>{
    //   console.log(res)
    //   if(res.data.code === 1)
    //   {
    //     const access_token = res.data.Token
    //     const userNameIs = res.data.firstName
    //     const userRoleis = res.data.group_id
    //     localStorage.setItem("token",access_token)
    //     setAuthToken(access_token)
    //     props.onChange(userNameIs);
    //     dispatch(authAction.setUserNameApp(userNameIs))
    //     dispatch(authAction.setUserRoken(access_token))
    //     dispatch(authAction.setUserRole(userRoleis))
    //     setEmail("");
    //     setPassword("");
    //     navigate('/dashboard')
    //   }else{
    //     setEmail("");
    //     setPassword("");
    //     alert("wrong username or password")
    //   }
    // })

   
  }

  return (
    <Grid container>
      <Grid style={div1Style} item lg={6}>
        <div className={classes.logo}>
          <img  src={monexologo} style={image} />
          <div className={classes.line}></div>
          <img src={ndfc} style={pnglogo} />
        </div>

        <div>
          <div style={paperStyle}>
            <Grid align="left">
              <h2>Login</h2>
            </Grid>
            <form onSubmit={loginHandle}>
              <Grid item md={4}>
                <TextField
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon style={{width:20, height:16}} />
                      </InputAdornment>
                    ),
                  }}
                  ref={usernameRef}
                  variant="filled"
                  placeholder="Email Address"
                  fullWidth
                  required
                  style={txt}
                  value={email}
                  onChange={emailHandler}
                />
                {emailErr ? (
                  <pre style={{ color: "red" }}>Please provide Valid Email</pre>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item md={4}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon  style={{width:18, height:21}}/>
                      </InputAdornment>
                    ),
                  }}
                  variant="filled"
                  placeholder="Password"
                  type="password"
                  fullWidth required
                  style={txt}
                  ref={passwordRef}
                  value={password}
                  onChange={PasswordHandler}
                />
                {passErr ? (
                  <pre style={{ color: "red" }}>
                    Please provide Valid Password
                  </pre>
                ) : (
                  ""
                )}
              </Grid>
              <Grid>
                <Typography
                  style={{ textAlign: "right", marginTop: 15, marginRight: 20 }}
                >
                  <Link href="#" style={{ color: "green", position:"relative", left:80 }}>
                    <span> Forgot password ?</span>
                  </Link>
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btnstyle}
                >
                  Login
                </Button>
              </Grid>
            </form>
          </div>
        </div>
      </Grid>
      <Grid style={div2Style} item lg={6}>
        <div style={{ backgroundColor: "green", height: "100vh" }}></div>
      </Grid>
    </Grid>
  );
};
export default Login;
