import React, { Component } from "react";
import Hero from "./Hero";

export default class HeroList extends Component {
  renderItem(element) {
    return <Hero element={element} />;
  }

  render() {
    const { options = [], parentTagName = "div" } = this.props;
    const listItems = options.map(this.renderItem);
    switch (parentTagName) {
      case "div":
        return <div className="flex-div">{listItems}</div>;
      default:
        return <ul className="flex-div">{listItems}</ul>;
    }
  }
}
