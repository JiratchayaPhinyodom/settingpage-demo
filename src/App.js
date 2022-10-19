import Header from './components/Header'
import 'antd/dist/antd.css';
import { Avatar, Grid } from 'antd';
import './App.css';
import { Component } from 'react';
import { Button, Modal } from 'antd';
import ProfilePicChanger from './components/profile'
import Pic1 from "./components/pictures/pic1.jpg"
import Pic2 from "./components/pictures/pic2.jpg"
import { SettingOutlined } from '@ant-design/icons';
import React from 'react';
import ToggleSwitch from './components/toggle_period'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      profileImage: ''
    }
  }
  handleImageChange = (profileImage) => {
    this.setState({
      profileImage
    })
  }

  render(){
    return (
      <div className='App'>
        <h3 className='name'>Period Pejai</h3>
        <p className='pic'><Avatar size={108} icon="user" src={this.state.profileImage}/></p>
        <p className='btn_profile'><ProfilePicChanger handleImageChange={this.handleImageChange} pic1={Pic1} pic2={Pic2}/></p>
        <div className='setting'><p className='setting_p'><SettingOutlined />Setting</p></div>
        <div><Button className='home'>Home</Button></div>
        <p className='reminder'>Reminders</p>
        <React.Fragment>
          <ToggleSwitch label="Period"/>
          <ToggleSwitch label="Ovaluation"/>
        </React.Fragment>
        <div><Button className='home'>Logout</Button></div>
      </div>
    )
  }
}

export default App;
