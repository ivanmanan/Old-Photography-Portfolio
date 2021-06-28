import React, { Component } from 'react';

import Heading from "./Heading";
import Template from "./Template";
import Portfolio from "./Portfolio";
import Workflow from "./Workflow";
import Contact from "./Contact";
import Footer from "./Footer";

import {photos, collection} from "./photos";

// Default option
let optionSelected = "Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: optionSelected
    };
    this.handleOptions = this.handleOptions.bind(this);
  }

  componentWillMount() {
    // If page refreshes, option will be chosen from last left off
    optionSelected = sessionStorage.getItem('optionSelected') || "Home";
    this.setState({
      optionSelected: optionSelected
    })
  }

  handleOptions(option) {
    sessionStorage.setItem('optionSelected', option);
    this.setState({
      optionSelected: option
    });
  }

  renderSelection() {
    console.log(this.state.optionSelected)
    console.log(photos)
    if(this.state.optionSelected in photos) {
      return <Template photos={photos[this.state.optionSelected]}/>;
    }

    switch(this.state.optionSelected) {
      case "Portfolio":
        return <Portfolio handleOptions={this.handleOptions}
                          collection={collection}/>;
      case "Workflow":
        return <Workflow/>;
      case "Contact":
        return <Contact/>;
      case "Home":
      default:
        return <Template photos={photos.Home}/>;
    }
  }

  render() {
    return (
      <div className="App">
        <Heading handleOptions={this.handleOptions}
                 currentOption={this.state.optionSelected}
                 collection={collection}/>
        {this.renderSelection()}
        <Footer/>
      </div>
    );
  }
}

export default App;
