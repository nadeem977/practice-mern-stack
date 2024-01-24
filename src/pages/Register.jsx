import React, { useState } from 'react'
import { Button } from '@mui/material'
import Logo from "../assets/logo2.png"
import PersonIcon from '@mui/icons-material/Person';
import DraftsIcon from '@mui/icons-material/Drafts';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useSnackbar } from "notistack";
import API_ROOT_URL from '../Config';
import isPasswordValid from '../components/CheckPasswords';




const Register = () => {


  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [validpaswords, setValidpaswords] = useState('')
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


  const submitForm = async () => {
    const Validpwd = isPasswordValid(password)
    if (Validpwd?.valid) {
      setValidpaswords(Validpwd?.valid)
      const data = { full_name: name, email, password, };
      try {
        const res = await axios.post(`${API_ROOT_URL}/user/register/`, data)
        setName('')
        setEmail('')
        setPassword('')
        const result = res?.data
        if (result?.valid) {
          enqueueSnackbar('Registration successful!', { variant: 'success' });
          navigate('/Login');
        }
      } catch (error) {
        enqueueSnackbar(error?.response?.data?.errors?.email[0], { variant: 'error' });
      }
    } else {
      setValidpaswords(Validpwd?.message)
    }
  };



  return (
    <>
      <div className='register_main_div'>

        <div className="form_div">
          <div className="logoregi_div"><Link to="/"><img src={Logo} alt="" /></Link></div>
          <div className="text_reg">
            <h1>Sign Up</h1>
            <p >Please Provide your email and password to register your account.</p>
          </div>
          <div className="Input_div">
            <div className="input_box">
              <label htmlFor="user">Username</label>
              <div className="input_logo_regis">
                <input type="text" name="name" id='use' placeholder='Enter Username' value={name} onChange={(e) => setName(e.target.value)} />
                <PersonIcon />
              </div>
            </div>
            <div className="input_box">
              <label htmlFor="email">email</label>
              <div className="input_logo_regis">
                <input type="email" name="email" id='email' placeholder='Enter Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                <DraftsIcon />
              </div>
            </div>
            <div className="input_box">
              <label htmlFor="Password">Password</label>
              <div className="input_logo_regis">
                <input type={`${checkpas ? "text" : "password"}`} name="password" id='Password'
                  placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='icon_register' onClick={handelpasswords}>{checkpas ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}</div>
              </div>
              <p className='pwd_sms'>{validpaswords || validpaswords}</p>
            </div>
            <div className="bturegi_div">
              <Button variant="contained" onClick={submitForm} disabled={!password || !email || !name}>
                Sign up
              </Button>

              <p>By signing up you agree with our Terms of <br /> Conditions and Privacy Policy rules</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
