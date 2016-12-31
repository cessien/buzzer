// src/components/InfoCard.js
import React from 'react';
import { withRouter } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class InfoCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          avatar={"/svg/" + this.props.avatar + ".svg"}
        />
        <CardTitle
          title={this.props.title}
          subtitle={this.props.subtitle}
        />
        {this.props.children}
      </Card>
    );
  }
}

export default withRouter( InfoCard );
