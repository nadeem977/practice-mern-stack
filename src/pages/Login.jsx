import React, { useState } from 'react'
import { Button } from '@mui/material'
import Logo from "../assets/logo2.png"
import DraftsIcon from '@mui/icons-material/Drafts';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom';
import API_ROOT_URL from '../Config';
import axios from 'axios'

const Login = () => {


  const[email ,setEmail] = useState('')
  const[password ,setPassword] = useState('')
  const [checkpas, setcheckPas,] = useState(false)
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()

  const handelpasswords = () => {
    if (checkpas) {
      setcheckPas(false);
    } else {
      setcheckPas(true);
    }
  }
  const submitforms = async () => {
    const data = {email, password, };
    try {
      const res = await axios.post(`${API_ROOT_URL}/user/login/`,data)
      setPassword('')
      setEmail('')
      const result = res?.data
   if(result?.valid){
    localStorage.setItem('token', JSON.stringify(result?.tokens))
     enqueueSnackbar("Login seccsusful!", { variant: "success" });
     navigate('/');
   }
    } catch (error) {
      enqueueSnackbar(error?.response?.data?.errors?.non_field_errors[0], { variant: "error" });
    }
  };

  return (
    <>
      <div className='register_main_div'>
        <div className="form_div">
          <div className="logoregi_div"><Link to="/"><img src={Logo} alt="" /></Link></div>
          <div className="text_reg">
            <h1>Sign In</h1>
            <p>Please Provide your email and password to register your account.</p>
          </div>
          <div className="Input_div">

            <div className="input_box">
              <label htmlFor="email">email</label>
              <div className="input_logo_regis">
                <input type="email" name="email" id='email' placeholder='Enter Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <DraftsIcon />
              </div>
            </div>
            <div className="input_box">
              <label htmlFor="Password">Password</label>
              <div className="input_logo_regis">
                <input type={`${checkpas ? "text" : "password"}`} name="password" id='Password' placeholder='Enter Password' value={password}  onChange={(e)=> setPassword(e.target.value)}/>
                <div className='icon_register' onClick={handelpasswords}>{checkpas ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}</div>
              </div>
              <Link to="/ForgetPassword" className="Links">Forgot password?</Link>
            </div>
            <div className="bturegi_div">
            <Button variant="contained" className="Link_back" onClick={submitforms} disabled={!password || !email}>
                Sign in
              </Button>
            </div>
            <p style={{ marginTop: '10px' }}> Don’t have an account? <Link to="/Register" className="Links">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
