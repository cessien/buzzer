// src/components/InfoCard.js
import React from 'react';
import { withRouter } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

class InfoCard extends React.Component {
  render() {
    return (
      <Card style={{marginBottom: '30px', padding: '30px'}}>
        <CardHeader
          avatar={
            <Avatar
              src={"/static/svg/" + this.props.avatar + ".svg"}
              size={50}
              style={{
                borderRadius: '0',
                backgroundColor: '#fff'
              }} />
          }
          title={this.props.title}
          titleStyle={{
            fontSize: 26
          }}
          subtitle={this.props.subtitle}
        />
        <CardText>
          {this.props.children}
        </CardText>
      </Card>
    );
  }
}

export default withRouter( InfoCard );
