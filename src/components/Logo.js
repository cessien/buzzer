// src/components/Logo.js
import React from 'react';

export default class Logo extends React.Component {
  render() {
    return (
      <div className='buzzer-title'>
        <span className='thousand'>+</span>
        <span className='ten'>10</span>
        <span className='thousand'>000</span>
        <br />
        <span className='pts'> points</span>
      </div>
    );
  }
}
