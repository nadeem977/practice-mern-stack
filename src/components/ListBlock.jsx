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
import { FaArrowsRotate } from "react-icons/fa6";
import { removeList } from '../redux/CreateTectBlock';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



const ListBlock = ({list }) => {


  const [expanded, setExpanded] = useState(true);
  const { setSettinBar, settingBar, setSettindTitle, setSavetmpl } = useContext(Appcontext)
  const dispatch = useDispatch()
  const {listcount} = useSelector((state)=>state.TextBlock)
  const[nbrs ,setNbrs] = useState([])
useEffect(()=>{
  setNbrs(listcount)
},[listcount])

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleCopy = () => {
    const blockContent = document.getElementById('block_content');
    if (blockContent) {
      navigator.clipboard.writeText(blockContent.innerText);
    }
  };
  const openBarfunc = (listValue) => {
    if (settingBar) {
      setSettinBar(false);
    } else {
      setSettindTitle(`List block ${listValue}`)
      setSettinBar(true);
      setSavetmpl(false)
      console.log(listValue)
    }
  }



  return (
    <div className="main_response_block_div">
      <div className='main_block_div'>
        <div className={`block_header ${expanded ? 'headerBor' : ''}`}>
          <div className='entro_block'>
            <CodeIcon className='code_icon' />
            <Renames storageKey={`List_block${listcount}`} blockId={listcount}
              defultName={"List Block"}
              clasNames="title_Block" icon="pencl_icon" />
            <Tooltip title="Setting" >
              <IconButton onClick={() =>openBarfunc(nbrs)}>
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
            <Button variant="text" className='remve_btn' onClick={()=>dispatch(removeList(list?.id))}>
              Remove
            </Button>
            <div onClick={handleToggle} className='header_icon'>
              <IconButton>{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
            </div>
          </div>
        </div>
        {expanded && (
          <div id='block_content' className='block_content_div'>
            <div className="main_content">
              {list && list?.list.map((item, i) => (
                <div className='main_list_Block' key={i}>
                  <div className='run_div'>
                    <Tooltip title="run">
                      <IconButton className='padinset'>
                        <FaArrowsRotate />
                      </IconButton>
                    </Tooltip>
                  </div>
                  {item?.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ListBlock
