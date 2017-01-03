// src/components/Team.js
import React from 'react';
import { withRouter } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid'
import InfoCard from '../InfoCard';

class Team extends React.Component {
  render() {
    return (
        <Grid>
          <Row>
            <Col xs={12}>
              <InfoCard
                avatar='volleyball'
                title='2017 Q1 Volleyball League'
              >
                <p>La la la la la</p>
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
                <p>La la la la la</p>
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
        </Grid>
    );
  }
}

export default withRouter( Team );
