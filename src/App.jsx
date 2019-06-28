import React, { Component } from 'react';

import Heading from "./Heading";
import Template from "./Template";
import Portfolio from "./Portfolio";
import Workflow from "./Workflow";
import Contact from "./Contact";
import Footer from "./Footer";

import photos from "./photos";

// Default option
let optionSelected = "Home";

class Pair {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }
}

// NOTE: Must create new pair for every shoot and update the
//       collection array. Collection is used for the menu in
//       Portfolio.jsx and for the dropdown in Heading.jsx
const p1 = new Pair("Class2019", "UCLA Class of 2019");
const p2 = new Pair("Ivan", "Ivan's Modelling Career")
const collection = [p1, p2];

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
      case "Portfolio":
        return <Portfolio handleOptions={this.handleOptions}
                          collection={collection}/>;
      case "Workflow":
        return <Workflow/>;
      case "Contact":
        return <Contact/>;
      case "Class2019":
        return <Template photos={photos.Class2019}/>;
      case "Ivan":
        return <Template photos={photos.Ivan}/>;
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
