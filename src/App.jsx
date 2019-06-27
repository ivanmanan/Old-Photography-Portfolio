import React, { Component } from 'react';

import Heading from "./Heading";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Workflow from "./Workflow";
import About from "./About";
import Contact from "./Contact";

/*
Specs:
Navbar at top

Options to be selected:

NOTE: When photo is selected, it gets displayed in a modal in wide
      screen with x-button at top-right corner

Home - myriad of sample photos

Portfolio - has dropdown of options; when click Portfolio, it displays list of options to choose from
--> be it landscape, weddings, events, portraits/people
--> all of these would be sample photos

Workflow - talk about what distinguishes me to other photograpers; raw image taken, then processed with Darktable, then GIMP photoshop for finishing touches - can provide manual possibly
--> how to fix blemishes and other photobombs
--> can show comparison of graduation photo between before and after at Janss Steps

About - about page
Instagram link here as well as footer

Contact


 */

// Default option
let optionSelected = "Home";

class App extends Component {

  // TODO: When refreshing page, keep state at last left off option

  constructor(props) {
    super(props);
    this.state = {
      optionSelected: optionSelected
    };
    this.options = [
      "Home",
      "Portfolio",
      "Workflow",
      "About"
    ];
    // TODO: Portfolio dropdown links will require new array
    // TODO: About dropdown will require "contact" options
    // NOTE: About section will also icnlude contact at bottom

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
      case "About":
        return <About/>;
      case "Contact":
        return <Contact/>;
      case "Home":
      default:
        return <Home/>;
    }
  }


  render() {
    return (
      <div className="App">
        <Heading options={this.options}
                 handleOptions={this.handleOptions}
                 currentOption={this.state.optionSelected}/>

        {this.renderSelection()}
      </div>
    );
  }
}

export default App;
