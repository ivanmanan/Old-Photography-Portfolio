import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="flex-footer">
          <div className="column-buffer-footer"/>
          <div className="column-center-footer">
            <a href="https://www.instagram.com/ivanmphotos/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default Footer;