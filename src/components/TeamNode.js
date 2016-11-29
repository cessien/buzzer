// src/components/TeamNode.js
import React from 'react';

export default class TeamNode extends React.Component {
  render() {
    return (
      <div style={this.props.styles}>{this.props.name}</div>
    );
  }
}
