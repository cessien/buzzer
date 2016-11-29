// src/components/SignUp.js
import React from 'react';
import Loading from './Loading';
import Logo from './Logo';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import * as firebase from 'firebase';
import { withRouter } from 'react-router';
import Center from 'react-center';

class SignUp extends React.Component {
  handleSubmit(e, self) {
    e.preventDefault();
    var name = self.name.input.value;
    var email = self.email.input.value;

    firebase.database().ref('/registrations').push({
      name: name,
      email: email
    }).then(function(result) {
      self.props.router.push('/thanks');
    });
  }

  render() {
    return (
      <div className='app-content'
        style={{
        }}>
        <Center><Logo /></Center>
        <br />
        <br />
        <Card>
          <CardTitle title="Hello." subtitle="Thank you for your interest" />
          <CardText>
            This league is going to be a great opportunity to connect as many people we can through having some fun; Being active, scoring points, and playing some volley ball. Thanks for chatting with us, we hop you'll leave your information below so we can keep in touch in the near future as we put together our first tournament.
          </CardText>
          <Center>
            <TextField
              hintText="Full Name"
              floatingLabelText="Name"
              ref={(name) => this.name = name}
            />
          </Center>
          <Center>
            <TextField
              hintText="someone@abc.com"
              ref={(email) => this.email = email}
              floatingLabelText="Email Address"
            />
          </Center>
          <br />
          <br />
          <Center>
            <RaisedButton label="Let's Keep In Touch" onTouchTap={(e) => this.handleSubmit(e,this)}/>
          </Center>
          <br />
          <br />
        </Card>
      </div>
    );
  }
}

export default withRouter(SignUp);
