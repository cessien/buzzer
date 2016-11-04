// src/components/Header.js
import React from 'react';
import { Link } from 'react-router';
import Menu from 'react-motion-menu';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/" className="col-md-3">
          <h1>BUZZER</h1>
        </Link>
        <div className="pull-right creation-fab">
          <Menu direction="vertical" distance={80} width={50} height={50} x={0} y={0}
            customStyle={{
                color: "#fff",
                textAlign:"center",
                lineHeight:"50px",
                backgroundColor: "#16A085",
                border: "solid 1px #16A085",
                borderRadius: "25%"
              }}>
              <a href="http://google.com"><i className="fa fa-plus"></i></a>
              <a href="http://google.com"><i className="fa fa-home"></i></a>
              <a href="http://google.com"><i className="fa fa-heart"></i></a>
          </Menu>
        </div>
        <div className="pull-right creation-fab"><i className="fa fa-search"></i></div>
      </header>
    );
  }
}
