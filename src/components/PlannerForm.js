import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { reduxForm } from 'redux-form';

import initialValues from '../utils/initialValues';
import stars from '../data/binary-stars';

import Button from './Button';

export const fields = ['day', 'month', 'year', 'ep', 'period', 'decl', 'ra', 'star'];

@Radium
class PlannerForm extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
  }

  handleSelectStarChange (e) {
    const star = e.target.value;
    this.props.selectStar(star);
  }

  render () {
    const {
      fields: { day, month, year, ep, period, decl, ra, star },
      handleSubmit,
      resetForm
    } = this.props;


    const starOptions = stars.map(function (star, i) {
      return <option key={i} value={star.name}>{star.name}</option>;
    });

    return (
      <form style={styles.base} onSubmit={handleSubmit}>

        <h4>Исходные данные расчета</h4>

        <ul style={styles.ul}>
          <li style={styles.li}>
            <select style={styles.select} key="star" onChange={this.handleSelectStarChange.bind(this)}>
              {starOptions}
            </select>
            <label style={styles.label}>Звезда</label>
          </li>
          <li style={styles.li}>
            <input type="text" style={styles.dateInput} key="day" size="2" maxsize="2" {...day}/>
            <label style={styles.label}>День</label>
          </li>
          <li style={styles.li}>
            <input type="text" style={styles.dateInput} key="month" size="2" maxsize="2" {...month}/>
            <label style={styles.label}>Месяц</label>
          </li>
          <li style={styles.li}>
            <input type="text" style={styles.dateInput} key="year" size="4" maxsize="4" {...year}/>
            <label style={styles.label}>Год</label>
          </li>
        </ul>

        <div style={styles.formSwitcher}>
          <label>
            <input type="checkbox"/> Включить режим ручной корректировки
          </label>
        </div>

        <div style={styles.hidden}>
          <h4>Режим ручного управления</h4>

          <ul style={styles.ul}>
            <li style={styles.li}>
              <input type="text" style={styles.dateInput} key="ep" size="12" {...ep}/>
              <label style={styles.label}>Начало отсчета (HJD Epoch)</label>
            </li>
            <li style={styles.li}>
              <input type="text" style={styles.dateInput} key="period" size="8" {...period}/>
              <label style={styles.label}>Период (HDJ days)</label>
            </li>
            <li style={styles.li}>
              <input type="text" style={styles.dateInput} key="ra" size="9" {...ra}/>
              <label style={styles.label}>RA</label>
            </li>
            <li style={styles.li}>
              <input type="text" style={styles.dateInput} key="decl" size="9" {...decl}/>
              <label style={styles.label}>Decl</label>
            </li>
          </ul>
        </div>

        <Button handler={handleSubmit}>
          Расчитать каллендарь наблюдений
        </Button>
      </form>
    )
  }
}

const styles = {
  base: {
    textAlign: 'left'
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: '1em 0 2em 0',
    textAlign: 'left',
  },
  li: {
    display: 'inline-block',
    textAlign: 'center',
    paddingLeft: '0.15em',
    paddingRight: '0.15em',
    color: '#e2e2e2'
  },
  dateInput: {
    textAlign: 'center',
    padding: '0.25em 0.5em',
    marginBottom: '0.25em',
    border: 'solid 1px #e2e2e2',
    color: 'black',
    backgroundColor: 'white',
    fontSize: '1.75em',
    ':focus': {
      backgroundColor: 'rgba(255,255,255,0.75)',
      outline: 'none'
    }
  },
  label: {
    display: 'block',
    fontSize: '0.65em',
    color: '#333',
    width: '100%',
    textAlign: 'center'
  },
  select: {
    color: 'black',
    padding: '0.25em 0.5em',
    fontSize: '1.75em',
    border: 'solid 1px #e2e2e2',
    borderRadius: '0px',
    appearance: 'none',
    backgroundColor: 'white',
    marginBottom: '0.25em',
  },
  hidden: {
    display: 'none'
  },
  formSwitcher: {
    marginBottom: '2em'
  }
}

export default reduxForm({
  form: 'plannerForm',
  fields
},
state => ({
  initialValues: initialValues
})
)(PlannerForm);
