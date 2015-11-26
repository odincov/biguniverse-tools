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
          <input type="text" placeholder="date" value="2015-11-19" {...date}/>
        </div>
        <div>
          <label>EP</label>
          <input type="text" placeholder="start point" value="2456181.84" {...ep}/>
        </div>
        <div>
          <label>Period</label>
          <input type="text" placeholder="period" value="2.86736" {...period}/>
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
