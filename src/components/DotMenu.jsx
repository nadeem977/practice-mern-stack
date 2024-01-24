import React,{useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { optonpd } from './style';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { modal1 } from './style';
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close';
import ShareModal from './ShareModal';


const DotMenu = ({ id, func ,RenameFunc }) => {

    
    const navigation = useNavigate();
    const [openmodel, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const[openShareModal ,setOpenShareModal] = useState(false);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handelremoves = () => {
        func(id);
        handleClose();
        navigation('/');
        setOpen(false)
        localStorage.removeItem(`project_name${id}`)
    };

    const RenamsFunction = ()=>{
        RenameFunc()
        handleClose();
    }
    const shareFunction = ()=>{
        handleClose();
        setOpenShareModal(true)
    }
    const options = [
        { icon: <ModeOutlinedIcon />, label: 'Rename', onClick: RenamsFunction },
        { icon: <ShareOutlinedIcon />, label: 'Share Project', onClick:shareFunction },
        { icon: <DeleteOutlineTwoToneIcon />, label: 'Delete Project', onClick: ()=>setOpen(true) },
    ];
    return (
        <>

            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: 48 * 4.5,
                        width: 'fit-content',
                        padding: '0px',
                    },
                }}>
                {options.map((option, index) => (
                    <MenuItem key={index} onClick={option.onClick} sx={optonpd}>
                        <div className="menu_dot">
                            {option.icon}
                            {option.label}
                        </div>
                    </MenuItem>
                ))}
            </Menu>
            <ShareModal openModal={openShareModal} modalClose={setOpenShareModal} id={id} />
            <div>
                <Modal
                    open={openmodel}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={modal1}>
                        <h3 className='modal_title'>
                            Delete Project
                            <IconButton onClick={()=>setOpen(false)}>
                            <CloseIcon/>
                            </IconButton>
                        </h3>
                        <hr />
                        <Typography id="modal-modal-description" className='modale_desc'>
                            Are you Sure you want to delete this project? <br />
                            This action can not be undone.
                        </Typography>
                        <hr />
                       <div className='delete_project_btns'>
                       <Button variant="outlined" onClick={()=>setOpen(false)} className='bntcan'>
                          cancel
                        </Button>
                        <Button variant="contained"  onClick={handelremoves} className='bntdel'>
                          Delete
                        </Button>
                       </div>
                    </Box>
                </Modal >
            </div>
        </>
    );
};

export default DotMenu;
