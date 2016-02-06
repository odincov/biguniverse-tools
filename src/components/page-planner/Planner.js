import React, { Component, PropTypes } from 'react';

import initialValues from '../../utils/initialValues';

import PlannerForm from './PlannerForm';
import PlannerResult from './PlannerResult';

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
    this.props.updatePlanner(initialValues);
  }

  render () {
    const {
      setDate,
      planner,
      plannerForm,
      updatePlanner,
      selectStar
    } = this.props;

    return (
      <div>
        <h1>Планировщик минимумов переменных звезд</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
        <PlannerForm onSubmit={updatePlanner} selectStar={selectStar}/>
        <PlannerResult planner={planner}/>
      </div>
    );
  }
}
