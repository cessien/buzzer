// src/components/MainLayout.js
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Base extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app-container">{this.props.children}</div>
      </MuiThemeProvider>
    );
  }
}
