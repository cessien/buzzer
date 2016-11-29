// src/components/IndexPage.js
import React from 'react';
import Loading from './Loading';
import Logo from './Logo';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import { withRouter } from 'react-router';
import Center from 'react-center';

class Login extends React.Component {
  componentDidMount() {
    if (this.props.router && !(null === firebase.auth().currentUser)) {
      this.props.router.push('/home');
    }

    var self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.props.router.push('/home');
      }
    });
  }

  handleSubmit(e,self) {
    e.preventDefault();
    var email = self.email.input.value;
    var pw = self.pw.input.value;

    firebase.auth().signInWithEmailAndPassword(email, pw).then(function(result) {
      var location = self.props.location
      if (location.state && location.state.nextPathname) {
        self.props.router.push(location.state.nextPathname);
      } else {
        self.props.router.push('/test');
      }
      // User signed in!
      console.log('User signed in!');
      // var uid = result.user.uid;
    }).catch(function(error) {
      self.setState({error: error});
    });
  }

  render() {
    return (
      <div className='app-content'
        style={{
          textAlign: 'center'
        }}>
        <Center><Logo /></Center>
        <TextField
          hintText="someone@abc.com"
          ref={(email) => this.email = email}
          floatingLabelText="Email Address"
        />
        <br />
        <br />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          ref={(pw) => this.pw = pw}
          type="password"
        />
        <br />
        <br />
        <RaisedButton label="Login" onTouchTap={(e) => this.handleSubmit(e,this)}/>
      </div>
    );
  }
}

export default withRouter(Login);
