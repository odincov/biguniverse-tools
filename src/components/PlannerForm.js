import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
export const fields = ['date', 'ep', 'period'];

class PlannerForm extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
  }

  render () {
    const {
      fields: { date, ep, period },
      handleSubmit,
      resetForm
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Start Date</label>
          <input type="text" placeholder="date" value="2010-12-23" {...date}/>
        </div>
        <div>
          <label>EP</label>
          <input type="text" placeholder="start point" value="2452253.567" {...ep}/>
        </div>
        <div>
          <label>Period</label>
          <input type="text" placeholder="period" value="2.867321" {...period}/>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    )
  }
}


export default reduxForm({
  form: 'planner',
  fields
})(PlannerForm);
