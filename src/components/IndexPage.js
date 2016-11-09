// src/components/IndexPage.js
import React from 'react';
import Loading from './Loading';
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
    setInterval(this.initNotification, 3000);
  }

  initNotification() {
    if (Math.random() > .5) {
      setState({
        notification: true
      });
    }
    else {
      setState({
        notification: false
      });
    }
  }

  render() {
    return (
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
          isActive={this.props.notification}
          message='HELLO WORLD'
          />
      </Card>
    );
  }
}
