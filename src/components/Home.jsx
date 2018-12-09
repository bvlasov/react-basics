import React from "react";
import List from "./List";
import HeroList from "./HeroList";
import heroes from "../utils/heroes";

const options = [
  { id: "1", value: 1 },
  { id: "2", value: 2 },
  { id: "3", value: 3 },
  { id: "4", value: 4 }
];

class Home extends React.Component {
  render() {
    return (
      <div>
        <List options={options} />
        <HeroList options={heroes} parentTagName="div" />
      </div>
    );
  }
}

export default Home;
