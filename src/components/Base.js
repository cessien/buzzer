// src/components/MainLayout.js
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Base extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <MuiThemeProvider>
          <div className="app-container">{this.props.children}</div>
        </MuiThemeProvider>
      </ReactCSSTransitionGroup>
    );
  }
}
