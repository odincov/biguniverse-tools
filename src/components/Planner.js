import React, { Component, PropTypes } from 'react';
import PlannerForm from './PlannerForm';

export default class Planner extends Component {

  static propTypes = {
    updatePlanner: PropTypes.func.isRequired
  }

  handleFormSubmit (data) {
    console.log('handle form submit with ', data);
  }

  render() {
    const {
      setDate,
      planner,
      updatePlanner
    } = this.props;

    return (
      <div>
        <h1>Variable Star Planner</h1>
        <PlannerForm onSubmit={updatePlanner}  />
      </div>
    );
  }
}
