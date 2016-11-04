// src/components/Round.js
import React from 'react';

export default class Round extends React.Component {
  render() {
    return (
      <div className='round'>{this.props.children}</div>
    );
  }
}
