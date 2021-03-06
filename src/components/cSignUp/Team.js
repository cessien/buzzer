// src/components/Team.js
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
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

class Team extends React.Component {
  render() {
    const style = {
      fontSize: '20px',
      color: '#757575'
    };

    const labelStyle = {
      color: 'rgba(255,255,255,128)'
    };

    return (
        <Grid>
          <AppBar
            title="Buzzer"
            iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
            onLeftIconButtonTouchTap={() => this.updateDrawer()} />
            <Stepper activeStep={1}>
              <Step>
                <StepLabel style={labelStyle}>Profile Information</StepLabel>
              </Step>
              <Step>
                <StepLabel style={labelStyle}>Choose a Team</StepLabel>
              </Step>
              <Step>
                <StepLabel style={labelStyle}>Make a Payment</StepLabel>
              </Step>
            </Stepper>
          <Row>
            <Col xs={12}>
              <InfoCard
                avatar='volleyball'
                title='2017 Q1 Volleyball League'
              >
                <p style={style}>This is a la la la test. I need to fill this in with actual info when I'm done.</p>
                <Checkbox
                  label="I agree to the terms and conditions and I am over the age of 12."
                />
              </InfoCard>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <InfoCard
                avatar='basketball-jersey'
                title='Profile Information'
                subtitle='Enter you basic info'
              >
                <Grid>
                  <Row>
                    <Col xs={12} sm={4}>
                      <TextField hintText="First Name" /><br />
                    </Col>
                    <Col xs={12} sm={4}>
                      <TextField hintText="Last Name" /><br />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={6}>
                      <TextField fullWidth={true} hintText="Username" /><br />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={6}>
                      <SelectField floatingLabelText="Gender" value={1} >
                        <MenuItem value={1} primaryText="Male" />
                        <MenuItem value={2} primaryText="Female" />
                      </SelectField>
                    </Col>
                  </Row>
                </Grid>
              </InfoCard>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <InfoCard
                avatar='group-1'
                title='Profile Information'
                subtitle='Enter you basic info'
              >
                <p>La la la la la</p>
              </InfoCard>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <FlatButton
                label="Back"
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />
            </Col>
            <Col xs={6}>
              <RaisedButton
                label="Next"
                primary={true}
                onTouchTap={this.handleNext}
              />
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default withRouter( Team );
