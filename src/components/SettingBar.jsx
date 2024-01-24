import React, { useContext, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Slider from '@mui/material-next/Slider';
import Button from '@mui/material/Button'
import { Appcontext } from '../context/Createcontext';
import { IconButton } from '@mui/material';




const SettingBar = ({id}) => {

    const [title, setTitle] = useState('')
    const { settingBar, setSettinBar, settindTitle } = useContext(Appcontext)

    const CloseSettingBar = () => {
        if (settingBar) {
            setSettinBar(false)
        } else {
            setSettinBar(true)
        }
    }
    useEffect(() => {
        setTitle(settindTitle)
    }, [settindTitle])

    return (
        <>
            <div className="main_setting_div">
                <div className="settings_main_div" style={{ right: settingBar ? '0px' : '-300px' }}>
                    <div className="setting_title_div">
                       <h1 className='setting_titles'>{title}</h1>
                        <IconButton onClick={CloseSettingBar}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className="progeress_barss">
                        <p>Temperature</p>
                        <Slider
                            disabled={false}
                            marks={false}
                            max={2}
                            min={0.1}
                            step={0.1}
                            size="medium"
                            style={{ color: "#1f4d77" }}
                            valueLabelDisplay="auto" />
                    </div>
                    <div className="progeress_barss">
                        <p>Max Length</p>
                        <Slider
                            disabled={false}
                            marks={false}
                            max={2040}
                            min={0}
                            size="medium"
                            style={{ color: "#1f4d77" }}
                            valueLabelDisplay="auto" />
                    </div>
                    <div className="progeress_barss">
                        <p>Frequency Penalty</p>
                        <Slider
                            disabled={false}
                            marks={false}
                            max={2}
                            min={0.1}
                            step={0.1}
                            size="medium"
                            style={{ color: "#1f4d77" }}
                            valueLabelDisplay="auto" />
                    </div>
                    <div className="progeress_barss">
                        <p>Presence Penalty</p>
                        <Slider
                            disabled={false}
                            marks={false}
                            max={2}
                            min={0.1}
                            step={0.1}
                            size="medium"
                            style={{ color: "#1f4d77" }}
                            valueLabelDisplay="auto" />
                    </div>
                    <div className="progeress_barss">
                        <p>Top P</p>
                        <Slider
                            disabled={false}
                            marks={false}
                            max={1}
                            min={0.1}
                            step={0.1}
                            size="medium"
                            style={{ color: "#1f4d77" }}
                            valueLabelDisplay="auto" />
                    </div>
                    <div className="progeress_barss">
                        <p>Select Engine And Model</p>
                        <select className='options_GPT'>
                            <option value="GPT-4-0314">GPT-4-0314</option>
                            <option value="GPT-3.5-turbo-1106">GPT-3.5-turbo-1106</option>
                            <option value="GPT-4-0613">GPT-4-0613</option>
                            <option value="GPT-4-32k-0613">GPT-4-32k-0613</option>
                        </select>
                    </div>
                    <div className="progeress_barss">
                        <p>Enter Prompt & Placeholders</p>
                        <div className="over_flow">
                        <textarea className='prompt_text' placeholder=''></textarea>
                        </div>
                    </div>
                    <div className="button_save_div">
                        <Button variant="contained">
                            save
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingBar
