import React, { Component } from 'react';

import Heading from "./Heading";
import Template from "./Template";
import Portfolio from "./Portfolio";
import Workflow from "./Workflow";
import Contact from "./Contact";
import Footer from "./Footer";

import photos from "./photos";


/*
Specs:
Navbar at top

HEADING - used to modify banner image
TEMPLATE - used to display myriad of photos

Options to be selected:

NOTE: When photo is selected, it gets displayed in a modal in wide
      screen with x-button at top-right corner

Portfolio - has dropdown of options; when click Portfolio, it displays list of options to choose from
--> be it landscape, weddings, events, portraits/people
--> all of these would be sample photos

 */

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
    switch(this.state.optionSelected) {
      // TODO: Portfolio itself has many options to display
      //       I'm going to use same ReactJS class, just different
      //       photos from the array of photo file names
      case "Portfolio":
        return <Portfolio/>;
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
                 currentOption={this.state.optionSelected}/>

        {this.renderSelection()}
        <Footer/>
      </div>
    );
  }
}

export default App;
