// src/components/Card.js
import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <div className='buzzer-card'>
        <div className="header-title">
          { this.props.title && <h1>{this.props.title}</h1> }
        </div>
        {this.props.children}
      </div>
    );
  }
}
