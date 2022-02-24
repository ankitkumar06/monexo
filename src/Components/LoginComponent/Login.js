import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

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
    console.warn(e.target.value);
    let item = e.target.value;
    if (item.length < 4) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(item);
  }

  function PasswordHandler(e) {
    console.log(e.target.value);
    let item = e.target.value;
    if (item.length < 4) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  function loginHandle(e) {
    // if (email.length < 4 || password.length < 4) {
    //   alert("Provide Valid Input");
    // } else {
    //   alert("Welcome to Monexo");
    // }
    // this.props.history.push('/dashboard')
    this.props.navigate.push('/dashboard')
    // navigate("/dashboard");
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
                  variant="filled"
                  placeholder="Email Address"
                  fullWidth
                  required
                  style={txt}
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
