// src/components/IndexPage.js
import React from 'react';
import Loading from './Loading';
import MainLayout from './MainLayout';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Bracket from './Bracket';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import Message from 'material-ui/svg-icons/communication/message';
import {deepOrange500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { Notification } from 'react-notification';

export default class IndexPage extends React.Component {
  componentDidMount() {
    var self = this;
    this.interval = setInterval(function() {
      self.initNotification(self);
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  initNotification(self) {
    if (Math.random() > .5) {
      self.setState({
        notification: true
      });
    }
    else {
      self.setState({
        notification: false
      });
    }
  }

  render() {
    return (
      <MainLayout>
        <Card>
          <CardTitle title="Volley Ball" subtitle="2017 Inter-Church Volley Ball League Tournament" />
          <CardText>
          </CardText>
          <Bracket />
          <CardActions>
            <FlatButton label="Like" />
            <FlatButton label="Follow" />
          </CardActions>
          <Notification
            isActive={this.state ? this.state.notification : true}
            message='HELLO WORLD'
            action='Open'
            />
        </Card>
      </MainLayout>
    );
  }
}
