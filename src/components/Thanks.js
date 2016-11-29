// src/components/Thanks.js
import React from 'react';
import Logo from './Logo';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import { withRouter } from 'react-router';
import Center from 'react-center';

class Thanks extends React.Component {
  render() {
    return (
      <div className='app-content'>
        <Center><Logo /></Center>
        <br />
        <br />
        <Card>
          <CardTitle title="Thanks Again" />
          <CardText>We'll be in touch with you shortly once we gather feedback from others. <br /> With Love &lt;3</CardText>
        </Card>
      </div>
    );
  }
}

export default withRouter(Thanks);
