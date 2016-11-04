// src/components/Bracket.js
import React from 'react';
//import * as d3 from "d3";
import Heat from './Heat';
import Round from './Round';

export default class Bracket extends React.Component {
  render() {
    return (
      <div style={{
        width: 500,
        height: 500
      }} className='bracket'>
        <Round>
          <Heat />
          <Heat />
        </Round>
      </div>
    );
  }
}
