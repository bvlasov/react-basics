import React from 'react';

export default class TextTrimmer extends React.Component {
  state = {
  	text: this.props.text.length > 20 ? this.props.text.slice(0, 20) + ' ...' : this.props.text
  };

  fullText() {
  	this.setState({ text: this.props.text });
  }

  render() {
  	return (
  		<div>
  			{this.state.text}
  			{this.props.text.length > 20 ? (
  				<button onClick={this.fullText.bind(this)}>More</button>
  			) : null}
  		</div>
  	);
  }
}
