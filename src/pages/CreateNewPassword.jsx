import React, { useState } from 'react'
import { Button } from '@mui/material'
import Logo from "../assets/logo2.png"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_ROOT_URL from '../Config';
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom';
import isPasswordValid from '../components/CheckPasswords';


const CreateNewPassword = () => {


  const [checkpas, setcheckPas,] = useState(false)
  const[newpwd, setNewpwd] = useState('')
  const[cfmpwd, setNewcfm] = useState('')
  const[errors ,setRErrors] = useState('')
  const[checkpwd , setCheckpwd] = useState('')
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()
  const handelpasswords = () => {
    if (checkpas) {
      setcheckPas(false);
    } else {
      setcheckPas(true);
    }
  }


  const submitNewPwd = async () => {
    setRErrors('')
    setCheckpwd('')
    const pwd = isPasswordValid(newpwd);
  
    if (pwd?.valid) {
      if (newpwd === cfmpwd) {
        const emailString = localStorage.getItem('email');
        const data = {
          password: newpwd,
          confirm_password: cfmpwd,
          email: emailString,
        };
  
        try {
          const res = await axios.post(`${API_ROOT_URL}/user/reset-password/`, data);
          if (res?.data?.success) {
            enqueueSnackbar('Password changing successful!', { variant: 'success' });
            localStorage.removeItem('email')
            navigate('/Confirmation');
          }
        } catch (error) {
          console.log('This is response', error);
        }
      } else {
        setCheckpwd('Passwords do not match.');
      }
    } else {
      setRErrors(pwd?.message);
    }
  };
  

  return (
    <>
      <div className='register_main_div'>

        <div className="form_div">
          <div className="logoregi_div"><Link to="/"><img src={Logo} alt="" /></Link></div>
          <div className="text_reg">
            <h1>Create New Password</h1>
            <p>Your new password must be unique from those previously used.</p>
          </div>
          <div className="Input_div">

          <div className="input_box">
              <label htmlFor="Password">New Password</label>
              <div className="input_logo_regis">
                <input type={`${checkpas ? "text" : "password"}`} name="password"
                 placeholder='New Password' value={newpwd} onChange={(e)=>setNewpwd(e.target.value)}/>
                <div className='icon_register' onClick={handelpasswords}>{checkpas ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}</div>
              </div>
              <p className='pwd_sms'>{errors ||  errors}</p>
            </div>
            <div className="input_box">
              <label htmlFor="Password">Confirm Password</label>
              <div className="input_logo_regis">
                <input type={`${checkpas ? "text" : "password"}`} name="password"
                value={cfmpwd} placeholder='Confirm Password' onChange={(e)=>setNewcfm(e.target.value)} />
                <div className='icon_register' onClick={handelpasswords}>{checkpas ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}</div>
              </div>
              <p className='pwd_sms'>{checkpwd &&  checkpwd }</p>
            </div>
            <div className="bturegi_div">
            <Button variant="contained" className="Link_back" onClick={submitNewPwd} disabled={!checkpwd || !newpwd}>Reset Password</Button>
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateNewPassword
