
import 'antd/dist/antd.css';
import './App.css';
import { Component } from 'react';
import { Button, Modal } from 'antd';
import Profile from './components/profile/profile'
import { SettingOutlined, HomeOutlined, LogoutOutlined} from '@ant-design/icons';
import React from 'react';
import ToggleSwitch from './components/toggle/toggle_period'
import Input_birth from './components/input/input_birth';
import Input_period from './components/input/input_period'
import Input_cycle from './components/input/input_cycle';
import Input_phase from './components/input/input_phase';

function App() {

    return (
        <div className='App'>
          <div className='left-side'>
          <Profile />
          <span className='setting'>
          <p className='setting_p'><SettingOutlined className='icon_setting'/>Setting</p>
          </span>
          <span><Button className='home'><p className='home_p' ><HomeOutlined className='icon_home'/>Home</p></Button></span>
          <p className='reminder'>Reminders</p>
          <ToggleSwitch label="Period" />
          <ToggleSwitch label="Ovaluation"/>
          <span><Button className='logout'><p className='logout_p' ><LogoutOutlined className='icon_logout'/>Logout</p></Button></span>
        </div>
        <div className='bc-input'>
          <div className='input'>
            <span className='box-year'><p className='year'>YEAR OF BIRTH </p><span className='mar'><Input_birth /></span></span>
            <span className='box-period'><p className='period-length'>PERIOD LENGTH</p><span className='mar'><Input_period /> DAYS</span></span>
            <span className='box-cycle'><p className='cycle-length'>CYCLE LENGTH</p><span className='mar'><Input_cycle /> DAYS</span></span>
            <span className='box-phase'><p className='phase-length'>LUTEAL PHASE LENGTH </p><span className='mar'><Input_phase /> DAYS</span></span>
            </div>
        </div>
      </div>
    )
}

export default App;
