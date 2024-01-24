import React, { useContext, useEffect, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Renames from './Renames';
import { Appcontext } from '../context/Createcontext';
import { TiLocationArrowOutline } from "react-icons/ti";
import { useDispatch,useSelector } from 'react-redux';
import { removeResBlock } from '../redux/CreateTectBlock';
const Addresponseblock = ({ res }) => {



    const dispatch =useDispatch()
    const [expanded, setExpanded] = useState(true);



    const { setSettinBar, settingBar, setSettindTitle, setSavetmpl } = useContext(Appcontext)
    const {respocount} = useSelector((state)=>state.TextBlock)



    const handleToggle = () => {
        setExpanded(!expanded);
    };
    const handleCopy = () => {
        const blockContent = document.getElementById('response_copy');
        if (blockContent) {
            navigator.clipboard.writeText(blockContent.innerText);
        }
    };

    const openBarfunc = (respoc) => {
        if (settingBar) {
            setSettinBar(false);
        } else {
            setSettindTitle(`Respons Block ${respoc}`)
            setSettinBar(true);
            setSavetmpl(false)
        }
    }
    return (
        <>

            <div className="main_response_block_div" >
                <div className='main_block_div'>
                    <div className={`block_header ${expanded ? 'headerBor' : ''}`}>
                        <div className='entro_block'>
                            <CodeIcon className='code_icon' />
                            <Renames storageKey={`Respons_Block${respocount}`} blockId={respocount}
                                defultName={"Response Block"}
                                clasNames="title_Block" icon="pencl_icon" />
                            <Tooltip title="Setting">
                            <IconButton onClick={() => openBarfunc(respocount)}>
                                    <SettingsOutlinedIcon className='pencl_icon' />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div className='remove_btn_div'>
                            <Tooltip title="run">
                                <IconButton>
                                    <TiLocationArrowOutline className='copy_icon' />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Copy">
                                <IconButton onClick={handleCopy}>
                                    <ContentCopyIcon className='copy_icon' />
                                </IconButton>
                            </Tooltip>
                            <Button variant="text" className='remve_btn' onClick={()=>dispatch(removeResBlock(res.id))}>
                                Remove
                            </Button>


                            <div onClick={handleToggle} className='header_icon'>
                                <IconButton>{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
                            </div>
                        </div>
                    </div>
                    {expanded && (
                        <>

                            <div id='block_content' className='block_content_div'>
                              
                                <div className="main_content" id='response_copy'>
                                    {res?.label}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
    
        </>
    );
};

export default Addresponseblock;
