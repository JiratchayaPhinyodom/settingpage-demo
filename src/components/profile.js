import 'antd/dist/antd.css';
import React from 'react';
import{ Component } from 'react';
import { Button, Modal } from 'antd';
import './style_profile.css';

class ProfilePicChanger extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: false,
            imagesArray: [props.pic1, props.pic2]
        }
    }
    state = {visible: false};
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
  render(){
    const imageMapper = this.state.imagesArray.map((image, index) => {
        return (
            <img src={image} 
                onClick={() => this.props.handleImageChange(image)}
                height = "48px"
            />
        )
    })
    return (
      <div className='ProfilePicChanger'>
        <Button type="primary" onClick={this.showModal}>
        Profile
      </Button>
      <Modal
        title="Personal Record"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>Username: </p>
        <p>Name: </p>
        <p>Age: </p>
        <p>Weight: </p>
        <p>Height: </p>
        {imageMapper}
      </Modal> {" "}
      </div>
    )
  }
}

export default ProfilePicChanger;
