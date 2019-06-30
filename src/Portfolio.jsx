import React, { Component } from 'react';
const target = "#";

class Portfolio extends Component {

  renderCollection(collection) {
    return collection.map((event, key) => (
        <div className="flex-portfolio-content" key={key}>
          <a href={target} onClick={() => this.props.handleOptions(event.name)}>
            ~ {event.title} ~
          </a>
        </div>
    ));
  }

  render() {
    return (
      <div className="Portfolio">
        <div className="flex-portfolio">
          <div className="column-center-portfolio">
            {this.renderCollection(this.props.collection)}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;