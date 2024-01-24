import React,{useEffect, useState} from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Renames from './Renames';
import { removeTextBlock } from '../redux/CreateTectBlock';
import { useDispatch,useSelector } from 'react-redux';

const TextBlocks = ({text}) => {

const [expanded, setExpanded] = useState(true);
const dispatch = useDispatch()
const {textcount} = useSelector((state)=> state.TextBlock)

const handleToggle = ()=>{
    if(expanded){
        setExpanded(false)
    }else{
        setExpanded(true)
    }
}
    return (
        <>
            <div className="main_response_block_div" >
                <div className='main_block_div'>
                <div className={`block_header ${expanded ? 'headerBor':''}`}>
                        <div className='entro_block'>
                            <CodeIcon className='code_icon' />
                            <Renames storageKey={`text_block${textcount}`} blockId={textcount}
                                defultName={"Text Block"}
                                clasNames="title_Block" icon="pencl_icon" />
                           
                        </div>
                        <div className='remove_btn_div'>
                            <Button variant="text" className='remve_btn'
                             onClick={()=>dispatch(removeTextBlock(text?.id))} > Remove </Button>
                            <div
                                onClick={handleToggle}
                                className='header_icon'>
                                <IconButton>{expanded ? <ExpandLessIcon />:<ExpandMoreIcon />}</IconButton>
                               
                            </div>
                        </div>
                    </div>
                   {expanded && (<div className='block_content_div'><textarea rows="3" placeholder='Enter text or prompt' className='text_block_prompt'></textarea></div>)}
                </div>
            </div>
        </>
    )
}

export default TextBlocks
