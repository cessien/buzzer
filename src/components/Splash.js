// src/components/Splash.js
import React from 'react';
import { withRouter } from 'react-router';
import Logo from './Logo';
import { fadeInUp, bounce } from 'react-animations';
import Radium from 'radium';
import Center from 'react-center';
import * as firebase from 'firebase';

class Splash extends React.Component {
  componentDidMount() {
    var self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      clearTimeout(self.gotoLoginAction);
      setTimeout(function() {
        if (user) {
          self.props.router.push('/home');
        } else {
          self.props.router.push('/login');
        }
      }, 1000);
    });

    this.gotoLoginAction = setTimeout( function() {
      if (self.props.router && !(null === firebase.auth().currentUser)) {
        // If authenticated go to indexpage
        self.props.router.push('/home');
      } else {
        // Else initiate login
        self.props.router.push('/login');
      }
    },2000);
  }

  render() {
    const styles = {
      fade: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
      }
    };
    return (
      <Center className='main'>
        <Logo style={styles.fade} />
      </Center>
    );
  }
}

export default Radium( withRouter(Splash) );
