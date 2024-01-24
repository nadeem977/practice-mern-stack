import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Logo from "../assets/logo2.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_ROOT_URL from '../Config';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from "notistack";

const Verification = () => {

  const { enqueueSnackbar } = useSnackbar();
  const [otpValues, setOtpValues] = useState(Array(4).fill(''));
  const boxes = Array.from({ length: 4 }, (_, index) => index + 1);
  const inputRefs = useRef(boxes.map(() => React.createRef()));
  const navigate = useNavigate()
  const handleInputChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value && index < boxes.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0].current.focus();
  }, []);


  const submitOTP = async () => {

    const emailString = localStorage.getItem('email')
    const otpCode = otpValues.join('');
    const data = {
      code: otpCode,
      email: emailString
    };
    try {
      const res = await axios.post(`${API_ROOT_URL}/user/verify-reset-code/`, data)
      if (res?.data?.success) {
        navigate('/CreateNewPassword')
      }
    } catch (error) {
      enqueueSnackbar(error?.response?.data?.error, { variant: "error" });
    }

  }

  return (
    <>
      <div className='register_main_div'>
        <div className="form_div">
          <div className="logoregi_div"><Link to="/"><img src={Logo} alt="" /></Link></div>
          <div className="text_reg">
            <h1>OTP Verification</h1>
            <p>Enter the verification code we just sent on your email address.</p>
          </div>
          <div className="Input_div">
            <div className="Code_Box">
              {boxes.map((_, index) => (
                <input
                  key={index}
                  ref={inputRefs.current[index]}
                  type="text"
                  className="box_varification"

                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              ))}
            </div>
            <div className="bturegi_div">
              <Button variant="contained" sx={{ width: '100%' }} onClick={submitOTP}>
                Send Code
              </Button>
            </div>
            <p>Resend Code in 0:30s</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
