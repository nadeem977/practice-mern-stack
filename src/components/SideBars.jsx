import React, { useState, useRef, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import { StyledInputBase, SearchIconWrapper, Search, btnBar } from './style';
import Button from '@mui/joy/Button';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DotMenu from './DotMenu';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import Tooltip from '@mui/material/Tooltip';
import Renames from './Renames';
import { Appcontext } from '../context/Createcontext';


const SideBars = ({ func, project, remove }) => {


  const childRenamRef = useRef(null);
  const [openbar, setOpenbar] = useState(true);
  const location = useLocation();
  const { setResblockwdt } = useContext(Appcontext)
  const handleBar = () => {
    setOpenbar(!openbar);
    setResblockwdt(openbar)
  };

  const newproject = () => {
    func();
  };

  const RenameFunc = () => {
    if (childRenamRef.current) {
      childRenamRef.current.childRenamRef();
    }
  };

  const shouldRenderSidebar = !['Register', 'Login', 'ForgetPassword', 'CreateNewPassword', 'Verification', 'Confirmation'].includes(
    location.pathname.replace('/', '')
  );

  if (!shouldRenderSidebar) {
    return null;
  }

  return (
    <>
      <div className="menu_icon" onClick={handleBar} style={{ left: openbar ? '275px' : '6px' }}>
        <Tooltip title={openbar ? 'Close menu' : 'Open menu'}>
        <div className={`${openbar ? 'open_one':'line1'}`}></div>
          <div className={`${ openbar ? 'close_one':'line2'}`}></div>
        </Tooltip>

      </div>
      <div className="action_sidebar" style={{ minWidth: openbar ? '270px' : '0px' }}>
        <div className="sidebar_main" style={{ left: openbar ? '0' : '-300px' }}>
          <div className="main_bar_Content">
            <div className="logo_div">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            {/* search components */}
            <div className="search_div">
              <small>GENERAL</small>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
            </div>

            {/* projects components */}
            <div className="project_div">
              <small className="leftsmal" style={{ marginBottom: '5px' }}>
                My Projects
              </small>

              {project.map((projectId, i) => (
                <div className="main_btn_div" key={i}>
                  <Link to={`/project${projectId}`}>
                    <Button variant="plain" className="bar_btn" style={btnBar}>
                      <span>
                        <InsertDriveFileOutlinedIcon />
                        <Renames
                          storageKey={`project_name${projectId}`}
                          clasNames={'renameSidbars'}
                          defultName={'New Project'}
                          blockId={projectId}
                          ref={childRenamRef}
                          clasRena={'noneIcon'}
                          inputclas="bar_inputs"
                        />
                      </span>
                    </Button>
                  </Link>
                  <div className="dot_div">
                    <DotMenu key={i} id={projectId} func={remove} RenameFunc={RenameFunc} />
                  </div>
                </div>
              ))}
            </div>

            {/* new project components */}
            <div className="new_project_div">
              <Button variant="text" onClick={newproject}>
                <AddCircleOutlineTwoToneIcon /> Add new project
              </Button>
            </div>

            {/* share projects components  */}
            <div className="share_projects">
              <small className="leftsmal">Shared with me</small>

              <div className="main_btn_div" style={{ marginTop: '5px' }}>
                <Button variant="text" className="bar_btn" style={btnBar}>
                  <span>
                    <InsertDriveFileOutlinedIcon />
                    shared Website
                  </span>
                </Button>
                <div className="dot_div">
                  <DotMenu />
                </div>
              </div>
            </div>
          </div>
          <div className="logout_div">
            <Link to="/Login">
              <Button variant="text" className="btn_logout">
                logout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBars;
