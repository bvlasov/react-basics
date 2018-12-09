import React from "react";
export default class List extends React.Component {
  renderItem(element) {
    return <li key={element.id}>{element.value}</li>;
  }

  render() {
    const { options = [] } = this.props;
    const listItems = this.props.options.map(this.renderItem);
    return (
      <ul onClick={e => e.nativeEvent} className="list">
        {listItems}
      </ul>
    );
  }
}
