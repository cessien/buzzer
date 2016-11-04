// src/components/IndexPage.js
import React from 'react';
import Loading from './Loading';
import Card from './Card';
import Bracket from './Bracket';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import Message from 'material-ui/svg-icons/communication/message';
import {deepOrange500} from 'material-ui/styles/colors';

export default class IndexPage extends React.Component {
  constructor(props) {
    this.state = {
      count: 0
    };
  }

  showNotification() {
    ReactMaterialUiNotifications.showNotification({
      title: 'Title',
      additionalText: `Some message to be displayed ${this.state.count}`,
      icon: <Message />,
    iconBadgeColor: deepOrange500,
    overflowText: "joe@gmail.com",
    timestamp: moment().format('h:mm A')
  })
  // update notifications count
  this.setState({
    count: ++this.state.count
  })
}

  render() {
    return (
      <Paper
        style={styles.paper}
        zDepth={0}
      >
        <FlatButton
          label="Examples file"
          primary={true}
          onTouchTap={this.showNotification}
        />
      </Paper>
    );
  }
  render_2() {
    return (
      <div className="home">
        <Card title="NCPPR 4 Fall Bracket">
          <Bracket />
          <Loading />
          <p>This is a test</p>
        </Card>
      </div>
    );
  }
}
