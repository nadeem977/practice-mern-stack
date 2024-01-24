import React, {useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box, Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { a11yProps, CustomTabPanel } from './style';
import Avatar from '@mui/material/Avatar';
import { BiLink } from "react-icons/bi";


CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const ShareModal = ({openModal,modalClose,id}) => {


  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);


 
  const handleClose = () => {
    setOpen(false)
    modalClose(false)
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setOpen(openModal)
  }, [openModal])

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className='share_Modal' >
          <div className="header_modal">
            <h2>Share Project {id}</h2>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="share_project_div">
            <h4><InsertDriveFileOutlinedIcon /> Yoga for Seniors</h4>
            <small>0.45 MB</small>
          </div>
          <div className="project_share">
          <div>
          <h4>Invite members via a sharable link</h4>
           <p > Anyone with the link can view</p>
          </div>
         <Button variant="contained" className='btn_Copy'>
         <BiLink /> copy
         </Button>
          </div>
          <div className="share_search_div">
            <input type="text" className='share_input' placeholder='Search for a member to add' />
          </div>

          <div className="share_tabe_main_div">
            <Box >
              <div className='tabs_btns'>
                <h4>Shared with 2 members</h4>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='share_tabs' >
                  <Tab label="All" {...a11yProps(0)} className='share_tab_tbn' />
                  <Tab label="Editors" {...a11yProps(1)} className='share_tab_tbn' />
                  <Tab label="Viewers" {...a11yProps(2)} className='share_tab_tbn' />
                </Tabs>
              </div>
              <CustomTabPanel value={value} index={0} >
              <Stack direction="column" spacing={1} mt={2}>
                  <div className='share_action'>
                  <Chip 
                    avatar={<Avatar alt="Natacha" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />}
                    label="Sandeep Maurya" variant="outlined"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    />
                   <select className='share_options'>
                   <option value="Only View">Only View</option>
                    <option value="Can Edit">Can Edit</option>
                   </select>
                  </div>
                   <div className='share_action'>
                   <Chip
                      avatar={<Avatar alt="Kashish" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />}label="Kashish Mali" variant="outlined"
                      onClick={handleClick}
                      onDelete={handleDelete}
                      />
                       <select className='share_options'>
                       <option value="Only View">Only View</option>
                    <option value="Can Edit">Can Edit</option>
                   </select>
                   </div>
                  </Stack>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
              <Stack direction="column" spacing={1} mt={2}>
                  <div className='share_action'>
                  <Chip 
                    avatar={<Avatar alt="Natacha" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />}
                    label="Sandeep Maurya" variant="outlined"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    />
                   <select className='share_options'>
                   <option value="Only View">Only View</option>
                    <option value="Can Edit">Can Edit</option>
                   </select>
                  </div>
                   <div className='share_action'>
                   <Chip
                      avatar={<Avatar alt="Kashish" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQFrgI883_niOm4TJzszD3Bz2ID_xPti3K0WoevSJrWc6FkOZeNwvr80W-bi4Fq_Mn5k&usqp=CAU" />}label="Stanger " variant="outlined"
                      onClick={handleClick}
                      onDelete={handleDelete}
                      />
                       <select className='share_options'>
                       <option value="Only View">Only View</option>
                    <option value="Can Edit">Can Edit</option>
                   </select>
                   </div>
                  </Stack>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
              <Stack direction="column" spacing={1} mt={2}>
                  <div className='share_action'>
                  <Chip 
                    avatar={<Avatar alt="Sandeep" src="images" />}
                    label="Sandeep Maurya" variant="outlined"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    />
                   <select className='share_options'>
                   <option value="Only View">Only View</option>
                    <option value="Can Edit">Can Edit</option>
                   </select>
                  </div>
                   <div className='share_action'>
                   <Chip
                      avatar={<Avatar alt="Kashish" src="https://freepngimg.com/thumb/youtube/63841-profile-twitch-youtube-avatar-discord-free-download-image-thumb.png" />}label="stanger" variant="outlined"
                      onClick={handleClick}
                      onDelete={handleDelete}
                      />
                       <select className='share_options'>
                    <option value="Only View">Only View</option>
                    <option value="Can Edit">Can Edit</option>
                   </select>
                   </div>
                  </Stack>
              </CustomTabPanel>
            </Box>
          </div>
        <div className="share_Done">
          <Button variant="outlined" className='outlinedbtns' onClick={()=> modalClose(false)}>
            cancel
          </Button>
           <Button variant="contained" style={{ background: '#1F4D77' }} onClick={()=> modalClose(false)}>
             done
           </Button>
        </div>
        </div>
      </Modal>
    </div>
  )
}

export default ShareModal
