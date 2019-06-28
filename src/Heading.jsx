import React, { Component } from "react";
import {Dropdown} from 'react-bootstrap';

import "./parallax.css";

class Heading extends Component {

  renderOptions() {

    // TODO: Make drop-down under Portfolio section with same
    // onClick function
    // Portfolio dropdown menu will be list with separate function
    // array will be located in this file
    // TODO: About dropdown will require "contact" options
    // NOTE: About section will also icnlude contact at bottom

    return (
      <div className="all-options">

        <div className="options">
          <button onClick={() => this.props.handleOptions("Home")}>
            <li>
              Home
            </li>
          </button>
        </div>

        <div className="options">
          <button onClick={() => this.props.handleOptions("Portfolio")}>
            <li>
              Portfolio
            </li>
          </button>

        </div>

        <div className="options">
          <button onClick={() => this.props.handleOptions("Workflow")}>
            <li>
              Workflow
            </li>
          </button>
        </div>

        <div className="options">
          <button onClick={() => this.props.handleOptions("Contact")}>
            <li>
              Contact
            </li>
          </button>
        </div>

      </div>
    );
  }

  displayBanner() {
    if(this.props.currentOption === "Home" ||
       this.props.currentOption === "Workflow" ||
       this.props.currentOption === "Portfolio") {
      return (
        <div className="Banner"
             id={this.props.currentOption+"-banner"}/>
      );
    }
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
        {this.displayBanner()}
      </div>
    );
  }
}

export default Heading;