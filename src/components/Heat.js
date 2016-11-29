// src/components/Heat.js
import React from 'react';
import TeamNode from './TeamNode';

export default class Heat extends React.Component {
  render() {
    return (
      <div className="heat" style={{ display: 'inline-block', height: '100%', position: 'relative' }}>
        <div className='bracket-line'/>
        <TeamNode styles={{
          position: 'absolute',
          top: 0,
          left: 0
        }} name='test 1' />
        <TeamNode styles={{
          position: 'absolute',
          bottom: 0,
          left: 0
        }} name='test 2' />
      </div>
    );
  }
}
