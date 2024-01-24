import React, { useState } from 'react'
import { Button } from '@mui/material'
import Logo from "../assets/logo2.png"
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_ROOT_URL from '../Config';
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom';



const ForgetPassword = () => {


  const [email, setEmail] = useState('')
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()
  const submitData = async () => {
   const data = {email}
    try {
      const res = await axios.post(`${API_ROOT_URL}/user/send-reset-password-email/`,data)
      localStorage.setItem('email',email)
      if(res?.data?.valid){
        enqueueSnackbar('check your email to get OTP', { variant: "success" });
        navigate('/Verification')
      }else{
        enqueueSnackbar(res?.data?.error, { variant: "error" });
      }
    } catch (error) {
      console.log("response errors",error)
    }

  }


  return (
    <>
      <div className='register_main_div'>
        <div className="form_div">
          <div className="logoregi_div"><Link to="/"><img src={Logo} alt="" /></Link></div>
          <div className="text_reg">
            <h1>Forgot Password?</h1>
            <p>Don't worry! It occurs. Please enter the email address linked with your account.</p>
          </div>
          <div className="Input_div">

            <div className="input_box">
              <label htmlFor="email">email</label>
              <div className="input_logo_regis">
                <input type="email" name="email" id='email' placeholder='Enter Email Address' onChange={(e) => setEmail(e.target.value)} />
                <DraftsIcon />
              </div>
            </div>

            <div className="bturegi_div" >
            <Button variant="contained" className="Link_back" onClick={submitData}disabled={!email}>Send Code</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword
