import React, { Component } from "react";

import "./parallax.css";
import "./navbar.css"

class Heading extends Component {
  constructor() {
    super();
    this.renderPortfolio = this.renderPortfolio.bind(this);
  }

  renderPortfolio() {
    return this.props.collection.map((pair, key) => (
      <button key={key}
              onClick={() => this.props.handleOptions(pair.name)}>
        {pair.title}
      </button>
    ));
  }

  renderOptions() {
    return (
      <div className="all-options">

        <div className="options">
          <button onClick={() => this.props.handleOptions("Home")}>
            Samples
          </button>
        </div>

        <div className="options">
          <div className="dropdown">
            <button onClick={() => this.props.handleOptions("Portfolio")}>
              <p>
                Portfolio
              </p>
            </button>
            <div className="dropdown-content" >
              {this.renderPortfolio()}
            </div>
          </div>
        </div>

        <div className="options">
          <button onClick={() => this.props.handleOptions("Workflow")}>
            Workflow
          </button>
        </div>

        <div className="options">
          <button onClick={() => this.props.handleOptions("Contact")}>
            Contact
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
        <div style={{backgroundImage: 'url(/images/banner/' + this.props.currentOption + '.jpg)'}} className="Banner" id={this.props.currentOption+"-banner"}/>
      );
    }
  }

  // TODO: Need to fix navbar scaling when becoming buttons

  render() {
    return (
      <div className="Heading">
        <nav className="navbar navbar-expand navbar-light bg-light"
             id="top-panel">
          <div className="container-fluid">

            <div className="navbar-right">
              <button type="button" className="pull-right navbar-toggle"
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
                Ivanmphotos
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