import React, { Component } from "react";

import "./parallax.css";

class Heading extends Component {

  renderOptions() {
    return this.props.options.map((option, key) => (
      <div className="options" key={key}>
        <button onClick={() => this.props.handleOptions(option)}>
          <li>
            {option}
          </li>
        </button>
      </div>
    ));
  }

  // TODO: Need to fix navbar scaling when becoming buttons
  // TODO: Need to vertically align in center navbar text
  // TODO: For banner image, create parallax effect, like how
  //       i-j-photo.com/portfolio does it


  render() {
    return (
      <div className="Heading">
        <nav className="navbar navbar-expand navbar-light bg-light"
             id="top-panel">
          <div className="container-fluid">

            <div className="navbar-right">
              <button type="button" className="pull-right
                navbar-toggle"
                      data-toggle="collapse"
                      data-target="#header-links"
                      id="navbar-toggle">
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>
            </div>

            <div className="navbar-header">
              <h1 className="navbar-brand" id="heading">
                Ivan Manan
              </h1>
            </div>

            <div className="navbar-collapse collapse"
                 id="header-links">
              <ul className="nav navbar-nav" id="header-options">
                {this.renderOptions()}
              </ul>
            </div>

          </div>

        </nav>

        <div className="Banner"
             id={this.props.currentOption+"-banner"}/>

      </div>
    );
  }
}

export default Heading;