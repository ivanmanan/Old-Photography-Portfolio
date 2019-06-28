import React, { Component } from 'react';
import Modal from 'react-modal';

/*
   TODO: In the future, include square orientation "s" in photos.js
   TODO: Resolve orientation - see issue in photos.js file
 */

Modal.setAppElement("#root");

const verticalStyle = {
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

const horizontalStyle = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    maxHeight: '100%',
    maxWidth: '100%'
  }
};

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalImage: "",
      orientation: "v"
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderColumn = this.renderColumn.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  openModal(modalImage, orientation) {
    this.setState({
      modalImage: modalImage,
      orientation: orientation,
      showModal: true
    });
  }

  closeModal() {
    this.setState({showModal: false});
  }

  renderModal() {
    switch(this.state.orientation) {

      case "h":
        return (
            <Modal isOpen={this.state.showModal}
                   onRequestClose={this.closeModal}
                   style={horizontalStyle}>
              <img id="modal-image" src={this.state.modalImage}/>
            </Modal>
        );
      case "v":
        return (
            <Modal isOpen={this.state.showModal}
                   onRequestClose={this.closeModal}
                   style={verticalStyle}>
              <img id="modal-image" src={this.state.modalImage}/>
            </Modal>
        );
    }
  }

  renderColumn(start, end, photos_names) {
    const photos_list = photos_names.slice(start, end);
    return photos_list.map((photo, key) => (
      <img src={photo} alt="" onClick={() =>
        this.openModal(photo, this.props.photos[photo])} key={key}/>
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
        <div className="flex-template">

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

        {this.renderModal()}
      </div>
    );
  }
}
export default Template;