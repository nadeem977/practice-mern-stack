import React, { useState, useEffect,forwardRef, useImperativeHandle } from 'react'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const Renames = forwardRef(({storageKey,clasNames,icon,blockId,defultName,clasRena,inputclas},ref) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const [projectName, setProjectName] = useState(`${defultName} ${blockId}`);


  
    const childRenamRef  =()=>{
        setIsEditMode(true);
    }
    useImperativeHandle(ref, () => ({
        childRenamRef, 
      }));
    const handleEditClick = () => {
        setIsEditMode(true);
    };
    const handleSaveClick = () => {
        setIsEditMode(false);
    
    };
    const handleCancelClick = () => {
        setIsEditMode(false);
        
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
           
            handleSaveClick();
        } else if (event.key === 'Escape') {
            handleCancelClick();
        }
    };
    return (
        <>
            <div className="header_title_div">
                {isEditMode ? (
                    <>
                    <div className='edit_name'>  
                      <input
                            type="text"
                            value={projectName}
                            className={`input_rename ${clasNames } ${inputclas}`}
                            onChange={(e) => setProjectName(e.target.value)}
                            onKeyDown={handleKeyDown}
                            />
                             <Tooltip title="Rename"
                             className={`${clasRena}`}>
                            <IconButton onClick={()=>setIsEditMode(false)} className={`${icon}`}>
                            <ModeOutlinedIcon />
                            </IconButton>
                           </Tooltip>
                            </div>
                    </>
                ) : (
                    <>
                        <h1 className={`${clasNames}`}>{projectName}</h1>
                        <Tooltip title="Rename"
                         className={`${clasRena}`}>
                            <IconButton onClick={handleEditClick} className={`${icon}`}>
                            <ModeOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </>
                )}
            </div>
        </>
    )
})

export default Renames
