import React, { Component, PropTypes } from 'react';
import PlannerForm from './PlannerForm';

import Wrapper from './Wrapper';
import Logotype from './Logotype';
import ImageHeader from './ImageHeader';
import PlannerResult from './PlannerResult';

let img = require('../images/bitu-bg.jpg');

export default class Planner extends Component {

  static propTypes = {
    updatePlanner: PropTypes.func.isRequired
  }

  render() {
    const {
      setDate,
      planner,
      updatePlanner
    } = this.props;

    return (
      <div>
        <ImageHeader image={img}>
          <Logotype/>
          <h1>Variable Star Planner</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
        </ImageHeader>
        <Wrapper color="lightBlue">
          <PlannerForm onSubmit={updatePlanner}/>
        </Wrapper>
        <Wrapper color="white">
          <PlannerResult planner={planner}/>
        </Wrapper>
      </div>
    );
  }
}
