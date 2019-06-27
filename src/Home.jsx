import React, { Component } from 'react';
import Modal from 'react-modal';

// TODO: Images onclick must open modal

/*
   specs:
   make 3 columns
   include images regardless of their size
 */

/*
   NOTE:

   I can create a single Component for every portfolio page
   And simply pass an array of all my images onto it

   NOTE:

   I must make this automated such that for all the images in the
   array, I divide it into 3 and each group of images goes into a
   specific columns

   The automation is creating the new div tag every time per image
 */

Modal.setAppElement("#root");

// TODO: Need to adjust width and height of images to scale
//       nicely for both vertical and horizontal images
const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    maxHeight: 'calc(15px + 40vh + 25vw)',
    maxWidth: 'calc(45px + 6vh + 28vw)'
  }
};



class Home extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      modalImage: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(modalImage) {
    console.log(modalImage);
    this.setState({
      modalImage: modalImage,
      showModal: true
    });
  }

  closeModal() {
    this.setState({showModal: false});
  }

  render() {
    return (
      <div className="Home">
        <div className="flex-home">

          <div className="column-buffer">
          </div>

          <div className="column-side">
            <img src={"/images/home/home1.jpg"} alt="" onClick={() =>
              this.openModal("/images/home/home1.jpg")}/>
            <img src={"/images/home/home2.jpg"} alt="" onClick={() =>
              this.openModal("/images/home/home2.jpg")}/>
          </div>

          <div className="column-center">
            <img src={"/images/home/home3.jpg"} alt="" onClick={() =>
              this.openModal("/images/home/home3.jpg")}/>
            <img src={"/images/home/home4.jpg"} alt=""/>
          </div>

          <div className="column-side">
            <img src={"/images/home/home5.jpg"} alt=""/>
            <img src={"/images/home/home6.jpg"} alt=""/>
          </div>

        </div>

        <Modal isOpen={this.state.showModal} style={customStyles}
               onRequestClose={this.closeModal}>
          <img id="modal-image" src={this.state.modalImage}/>
        </Modal>



      </div>
    );
  }
}


export default Home;