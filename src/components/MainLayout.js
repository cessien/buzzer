// src/components/MainLayout.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';
import Header from './Header';
import BottomBar from './BottomBar';
import SideMenuItem from './SideMenuItem';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {lightGreen100} from 'material-ui/styles/colors';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.glob = {
        notificationHandler: this.sayHello,
        updateDrawer: this.updateDrawer
    };
  }

  sayHello(text) {
    alert("whoa there");
  }

  updateDrawer(status) {
    if(status) {
      this.setState({ drawerOpen: status });
    }
    else {
      this.setState({ drawerOpen: !this.state.drawerOpen });
    }
  }

  handleToggle() { this.setState({drawerOpen: !this.state.drawerOpen}); }

  handleClose() { this.setState({drawerOpen: false}); }

  handlePage(page) {
      this.handleClose();
      this.props.router.push(page);
  }

  render() {
    return (
      <main id="page-wrap" className="main">
        <AppBar
          title="Buzzer"
          iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
          onLeftIconButtonTouchTap={() => this.updateDrawer()} />
        <BottomBar glob={this.glob}/>
          <Drawer
            docked={false}
            width={200}
            open={this.state.drawerOpen}
            onRequestChange={(open) => this.setState({open})}
            backgroundColor={lightGreen100}
            >
            <MenuItem onTouchTap={() => this.handleClose()}>
              <Avatar size={80} style={{padding: '20px'}}>CE</Avatar>
            </MenuItem>
            <MenuItem onTouchTap={() => this.handlePage('/user/profile')}>Profile</MenuItem>
            <MenuItem onTouchTap={() => this.handlePage('/login')}>My Team</MenuItem>
          </Drawer>
        <div className="app-content">{this.props.children}</div>
      </main>
    );
  }
}

export default withRouter(MainLayout);
