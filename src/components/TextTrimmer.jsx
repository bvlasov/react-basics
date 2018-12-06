import React from 'react';

export default class TextTrimmer extends React.Component {
  state = {
  	text:
      this.props.text.length > 50
      	? this.props.text.slice(0, 50)
      	: this.props.text
  };

  render() {
  	return (
  		<div>
  			{this.state.text}
  			{this.props.text.length > 50 ? (
  				<button onClick={this.openText}>...</button>
  			) : null}
  		</div>
  	);
  }

  openText = () => {
  	this.setState({ text: this.props.text });
  };
}
