import React from 'react'
import { Button } from '@mui/material'
import Logo from "../assets/logo2.png"
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <>
      <div className='register_main_div'>

        <div className="form_div">
          <div className="logoregi_div"><Link to="/"><img src={Logo} alt="" /></Link></div>
          <div className="text_reg" style={{textAlign:'center'}}>
            <h1>Password Changed!</h1>
            <p>Your password has been changed successfully.</p>
          </div>
          <div className="Input_div">


            <div className="bturegi_div">
            <Link to="/Login" className="Link_back">
            <Button variant="contained" className="Link_back">
              Back to login
              </Button>
            </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Confirmation
