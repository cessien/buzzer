// src/components/Payment.js
import React from 'react';
import { withRouter } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid'
import InfoCard from '../InfoCard';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Checkbox from 'material-ui/Checkbox';

class Payment extends React.Component {
	render() {
		const style = {
      fontSize: '20px',
      color: '#757575'
    };

		return (
      <div></div>
		);
	}
}

export default withRouter( Payment );
