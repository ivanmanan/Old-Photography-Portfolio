import React, { Component } from 'react';
import Modal from 'react-modal';

/*
   TODO: Modal must adjust according to orientation
   TODO: In the future, include square orientation "s" in photos.js

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



class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalImage: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderColumn = this.renderColumn.bind(this);
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


  /*
     TODO: Split this.props.photos into 3, then create functions for
     to map each div tags for each column
   */

  renderColumn(start, end, photos_names) {

    // TODO: Must create conditional for orientation of photo
    // so modal knows how big to display the image

    const photos_list = photos_names.slice(start, end);
    console.log(photos_list);

    return photos_list.map((photo, key) => (
      <img src={photo} alt="" onClick={() =>
        this.openModal(photo)} key={key}/>
    ));
  }

  render() {
    // photos is an object with key:string, value:string
    const photos = this.props.photos;
    const keys = Object.keys(photos);

    // Divide this.props.photos into 3
    const photos_length = Object.keys(photos).length;
    const col_length = Math.floor(photos_length/3);
    let col_one = col_length;
    let col_two = col_length;
    let col_three = col_length;

    // Determine if there is remainder photo
    switch(photos_length % 3) {
      case 1:
        col_one++;
        break;
      case 2:
        col_one++;
        col_two++;
        break;
    }

    // Obtain indices of the array for beginning of every column
    col_two = col_one + col_two;
    col_three = col_two + col_three;

    return (
      <div className="Template">
        <div className="flex-home">

          <div className="column-buffer">
          </div>

          <div className="column-side">
            {this.renderColumn(0, col_one, keys)}
          </div>

          <div className="column-center">
            {this.renderColumn(col_one, col_two, keys)}
          </div>

          <div className="column-side">
            {this.renderColumn(col_two, col_three, keys)}
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
export default Template;