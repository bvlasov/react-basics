import React, { Component } from "react";

export default class Hero extends Component {
  state = {
    isOpen: false
  };

  toggleDesc = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { isOpen } = this.state;
    const { id, hero, avatar, name, description } = this.props.element;
    const desc = isOpen ? description : description.slice(0, 10);
    return (
      <li key={id}>
        <p>{hero}</p>
        <img src={avatar} />
        <p>{name}</p>
        <p>
          {desc}
          <button onClick={this.toggleDesc}>{isOpen ? "<<<" : ">>>"}</button>
        </p>
      </li>
    );
  }
}
