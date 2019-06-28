import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <hr/>
        <div className="flex-contact">
          <p>Business coming soon!</p>
        </div>

        <div className="flex-contact">
          <img src={"/images/contact/construction.jpg"} alt=""/>
        </div>

      </div>
    );
  }
}

export default Contact;