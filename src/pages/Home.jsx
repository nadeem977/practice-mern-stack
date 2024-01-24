import React, { useState } from 'react'
import { GoPlusCircle } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
const Home = ({func,id}) => {

  const navigate = useNavigate()
  const handelfunc = ()=>{
    func()
    navigate(`/project${1}`)
    
  }

  return (
    <>
      <div className='home_defualt'>
        <h1>Workspace</h1>
        <p><strong>Textanium</strong> is a smart AI that understands your brand, your audience, and your
          industry, ensuring your website always stays on the cutting edge of information and engagement. Embrace the future of content with us.</p>
        <div className='new_project_div_home' onClick={handelfunc}>
          <GoPlusCircle className='icons_home' />
          <p>Add New Project</p>
        </div>

      </div>
    </>
  )
}

export default Home
