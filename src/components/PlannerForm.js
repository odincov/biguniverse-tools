import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { reduxForm } from 'redux-form';
import throttle from 'lodash/function/throttle';

import initialValues from '../utils/initialValues';

import Button from './Button';

export const fields = ['day', 'month', 'year', 'ep', 'period', 'decl', 'ra'];

const throttleTime = 350;

@Radium
class PlannerForm extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
  }

  componentDidMount () {}

  render () {
    const {
      fields: { day, month, year, ep, period, decl, ra },
      handleSubmit,
      resetForm
    } = this.props;

    return (
      <form style={styles.base} onSubmit={handleSubmit}>

        <h4>1. Введите параметры звезды</h4>

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
            <input type="text" style={styles.dateInput} key="decl" size="9" {...decl}/>
            <label style={styles.label}>Decl</label>
          </li>
          <li style={styles.li}>
            <input type="text" style={styles.dateInput} key="ra" size="9" {...ra}/>
            <label style={styles.label}>RA</label>
          </li>
        </ul>

        <h4>1.1. Либо выберите одну из списка</h4>
        <select>
          <optgroup label="EB - Eclipsing Binaries">
            <option>Algol</option>
            <option>RZ Cas</option>
            <option>V1016 Ori</option>
            <option>U Sge</option>
            <option>Delta Lib</option>
            <option>U Cep</option>
          </optgroup>
          <optgroup label="Cepheids">
            <option>Delta Cap</option>
            <option>Eta Aql</option>
            <option>W Sgr</option>
            <option>Zeta Gem</option>
          </optgroup>
        </select>

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
  }
}

export default reduxForm({
  form: 'planner',
  fields
},
state => ({initialValues: initialValues})
)(PlannerForm);
