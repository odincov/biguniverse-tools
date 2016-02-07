import React, { Component, PropTypes } from 'react';

import initialValues from '../../utils/initialValues';
import initialStar from '../../data/default-star';

import Form from './PlannerForm';
import Result from './PlannerResult';

let img = require('../../images/bitu-bg.jpg');

export default class Planner extends Component {

  static propTypes = {
    updatePlanner: PropTypes.func.isRequired,
    selectStar: PropTypes.func.isRequired
  }

  constructor () {
    super();
  }

  componentDidMount () {
    const { star, date } = this.props;
    this.props.updatePlanner({ star, date });
  }

  render () {
    const {
      scheduler,
      star,
      stars,
      date,
      updatePlanner,
      updateDate,
      selectStar
    } = this.props;

    return (
      <div>
        <h1>Планировщик минимумов переменных звезд</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
        <Form plannerUpdate={updatePlanner} updateDate={updateDate} star={star} selectStar={selectStar}/>
        <Result scheduler={scheduler}/>
      </div>
    );
  }
}
