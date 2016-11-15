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
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import * as firebase from 'firebase';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorText: '',
      email: '',
      displayName: ''
    };
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.setState({
        email: user.email,
        displayName: user.displayName
      });
    }
  }

  updateEmail() {
    this.setState({
      email: 'cessien88@gmail.com'
    });
  }

  validateZip(event) {
    if (event.target.value.match(/[0-9]{5}/)) {
      this.setState({ errorText: '' })
    } else {
      this.setState({ errorText: 'The zip must be 5 digits: e.g. 00000' })
    }
  }

  updateProfile() {
    user.updateProfile({
      displayName: this.state.displayName
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
            <TextField hintText="Full name" underlineShow={false} style={style} value={this.state.displayName}/>
            <Divider />
            <TextField hintText="Zip code eg. 00000" underlineShow={false} style={style} errorText= {this.state.errorZipText} onChange={this.validateZip.bind(this)}/>
            <Divider />
            <DatePicker hintText="Date of birth" underlineShow={false} locale='en-US' style={style}/>
            <Divider />
            <TextField  disabled={true} hintText="Email address" underlineShow={false} style={style} onChange={this.updateEmail} value={this.state.email}/>
            <Divider />
            <RaisedButton label="Update" primary={true} style={{ margin: '20px' }} onTouchTap={() => this.updateProfile.bind(this)} />
          </div>
        </div>
    );
  }
}

export default withRouter( Profile );
