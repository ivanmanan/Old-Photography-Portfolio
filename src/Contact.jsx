import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <hr/>
        <div className="flex-contact">
          <div className="flex-contact-row">
            Business coming soon!
          </div>
          <div className="flex-contact-row">
            For now, please send a direct message to me on Instagram.
          </div>
          <div className="flex-contact-row">
            <a href="https://www.instagram.com/ivanmphotos/" target="_blank" rel="noopener noreferrer">@ivanmphotos</a>
            </div>
        </div>

        <div className="flex-contact">
          <img src={"/images/contact/temp.jpg"} alt=""/>
        </div>

      </div>
    );
  }
}

export default Contact;