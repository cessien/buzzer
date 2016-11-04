// src/components/MainLayout.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import BottomBar from './BottomBar';
import SideMenuItem from './SideMenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class MainLayout extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <main id="page-wrap" className="main">
          <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <BottomBar />
          <div className="app-content">{this.props.children}</div>
        </main>
      </MuiThemeProvider>
    );
  }
  render_old() {
    return (
      <MuiThemeProvider>
        <main id="page-wrap" className="main">
          <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <div className="app-container">
            <Row>
              <Col md={12} xs={12}>
                <Header />
              </Col>
            </Row>
            <footer>
              <p>
                Made with <strong>love</strong> and <strong>motivation</strong>.
              </p>
            </footer>
          </div>
          <BottomBar />
        </main>
      </MuiThemeProvider>
    );
  }
}
