import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <hr/>
        <div className="flex-contact">
          <div className="flex-contact-row">
            Schedule a photo shoot in San Francisco!
          </div>
          <div className="flex-contact-row">
            Contact me via direct message on Instagram.
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