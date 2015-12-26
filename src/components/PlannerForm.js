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

        <h4>1. Выберите звезду</h4>
        <select style={styles.select} key="star" onChange={this.handleSelectStarChange.bind(this)}>
          {starOptions}
        </select>

        <h4>1.1 Параметры звезды</h4>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <input type="text" style={styles.dateInput} key="ep" size="10" {...ep}/>
            <label style={styles.label}>Начало отсчета</label>
          </li>
          <li style={styles.li}>
            <input type="text" style={styles.dateInput} key="period" size="8" {...period}/>
            <label style={styles.label}>Период</label>
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


        <h4>2. Установите расчетную дату</h4>

        <ul style={styles.ul}>
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

        <Button handler={handleSubmit}>
          Расчитать
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
    textAlign: 'left'
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
    color: '#c3c3c3',
    width: '100%'
  },
  select: {
    padding: '0.25em 0.5em',
    fontSize: '1.75em',
    border: 'solid 1px #e2e2e2',
    borderRadius: '0px',
    appearance: 'none',
    backgroundColor: 'white',
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
