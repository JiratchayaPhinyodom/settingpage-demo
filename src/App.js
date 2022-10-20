
import 'antd/dist/antd.css';
import './App.css';
import { Component } from 'react';
import { Button, Modal } from 'antd';
import Profile from './components/profile'
import { SettingOutlined, HomeOutlined} from '@ant-design/icons';
import React from 'react';
import ToggleSwitch from './components/toggle_period'

function App() {

    return (
      <div className='App'>
        <Profile />
        <span className='setting'>
          <p className='setting_p'><SettingOutlined className='icon_setting'/>Setting</p>
          </span>
        <span><Button className='home'><p className='home_p' ><HomeOutlined className='icon_home'/>Home</p></Button></span>
        <p className='reminder'>Reminders</p>
        <React.Fragment>
          <ToggleSwitch label="Period" />
          <ToggleSwitch label="Ovaluation"/>
        </React.Fragment>
      </div>
    )
}

export default App;
