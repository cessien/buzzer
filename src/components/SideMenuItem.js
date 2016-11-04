// src/components/SideMenuItem.js
import React from 'react';

export default class SideMenuItem extends React.Component {
  render() {
    return (
      <a className="menu-item" href="/">
        <i className={"icon fa fa-" + (this.props.icon || 'plus') } />
        <span className="name"> {this.props.name || 'Charles'}</span>
        {this.props.notificationCount && <div className="notification">{this.props.notificationCount}</div>}
      </a>
    );
  }
}
