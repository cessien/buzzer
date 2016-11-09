// src/components/BottomBar.js
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import SocialPerson from 'material-ui/svg-icons/action/account-circle';
import Home from 'material-ui/svg-icons/action/home';

const feedsIcon = <Home />;
const peopleIcon = <SocialPerson />;
const nearbyIcon = <IconLocationOn />;

export default class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.select = (index) => this.setState({selectedIndex: index});
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Updates"
            icon={feedsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Online"
            icon={peopleIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Map"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
