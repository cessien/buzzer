// src/components/Profile.js
import React from 'react';
import { withRouter } from 'react-router';
import Center from 'react-center';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { greenA100 } from 'material-ui/styles/colors';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import * as firebase from 'firebase';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorZipText: '',
      email: '',
      displayName: '',
      zip: '',
      dob: null
    };
  }

  componentDidMount() {
    var that = this;

    this.database = firebase.database();
    var user = this.user = firebase.auth().currentUser;
    if (user != null) {
      this.database.ref('users/' + user.uid).on('value', function(snapshot) {
        var dob, zip;
        if (snapshot.val()) {
          dob = snapshot.val().dob;
          zip = snapshot.val().zip;
        }

        if ( dob && typeof dob === 'string' ) {
          dob = new Date(dob);
        }

        that.setState({
          email: user.email,
          displayName: user.displayName,
          dob: dob,
          zip: zip
        });
      });
    }
  }

  updateName(e) {
    this.setState({
      displayName: e.target.value
    });
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  updateDOB(e,date) {
    this.setState({
      dob: date
    });
  }

  validateZip(event, val) {
    if (val.match(/[0-9]{0,5}/)) {
      this.setState({
        errorText: '',
        zip: val
      });

    } else {
      this.setState({
        errorText: 'The zip must be 5 digits: e.g. 00000',
        zip: val
      })
    }
  }

  updateProfile() {
    var that = this;

    this.user.updateProfile({
      displayName: this.state.displayName
    }).then(function() {
      firebase.database().ref('users/' + that.user.uid).set({
        dob: that.state.dob.toString() || null,
        zip: that.state.zip || null
      });
      that.setState({
        saveSuccess: true
      });
      setTimeout(function(){
        that.setState({
          saveSuccess: false
        });
      },3000);
    }, function(e) {
      that.setState({
        errorText: e
      });
    });
  }

  render() {
    const style = {
      color: '#fff'
    };
    return (
        <div>
          <AppBar
            title="Profile"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonTouchTap={() => this.props.router.push('/home')}
          />
          <div className='app-content' style={{ backgroundColor: '#fff' }}>
            <Avatar size={80} style={{padding: '20px', margin: '20px'}}>CE</Avatar>
            <br />
            <br />
            <TextField hintText="Full name" underlineShow={false} style={style} value={this.state.displayName} onChange={this.updateName}/>
            <Divider />
            <TextField hintText="Zip code eg. 00000" underlineShow={false} style={style} errorText={this.state.errorZipText} value={this.state.zip} onChange={this.validateZip.bind(this)}/>
            <Divider />
            <DatePicker hintText="Date of birth" underlineShow={false} locale='en-US' style={style} onChange={this.updateDOB.bind(this)} value={this.state.dob}/>
            <Divider />
            <TextField  disabled={true} hintText="Email address" underlineShow={false} style={style} onChange={this.updateEmail} value={this.state.email}/>
            <Divider />
            <div>
              <RaisedButton label="Update" primary={true} style={{ margin: '20px' }} onTouchTap={this.updateProfile.bind(this)} />
              <p style={{
                color: greenA100,
                display: this.state.saveSuccess ? 'inline-block' : 'none'
              }}>Updates saved. <FontIcon className="fa fa-check" style={{color: greenA100}}></FontIcon></p>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter( Profile );
