import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { reduxForm } from 'redux-form';

import initialValues from '../utils/initialValues';
import stars from '../data/binary-stars';

import Button from './Button';

// Date picker component dependencies
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import LocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ru';

export const fields = ['day', 'month', 'year', 'ep', 'period', 'decl', 'ra', 'star'];

@Radium
class PlannerForm extends Component {
  state = {
    calendarValue: moment().format("L"), // The value of the input field
    calendarMonth: new Date() // The month to display in the calendar
  }

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
  }

  handleSelectStarChange (e) {
    const star = e.target.value;
    this.props.selectStar(star);
  }

  handleCalendarInputChange(e) {
    const { value } = e.target;

    // Change the current month only if the value entered by the user is a valid
    // date, according to the `L` format
    if (moment(value, "L", true).isValid()) {
      this.setState({
        calendarMonth: moment(value, "L").toDate(),
        calendarValue: value
      }, this.showCalendarCurrentDate);
    }
    else {
      this.setState({ calendarValue: value }, this.showCalendarCurrentDate);
    }
  }

  handleCalendarDayClick(e, day) {
    this.setState({
      calendarValue: moment(day).format("L"),
      calendarMonth: day
    });
  }

  showCalendarCurrentDate() {
    this.refs.daypicker.showMonth(this.state.calendarMonth);
  }

  render () {
    const showCalendarInput = false;

    const selectedDay = moment(this.state.calendarValue, "L", true).toDate();

    const {
      fields: { day, month, year, ep, period, decl, ra, star },
      handleSubmit,
      resetForm
    } = this.props;


    const starOptions = stars.map(function (star, i) {
      return <option key={i} value={star.name}>{star.name}</option>;
    });

    return (
      <div>
        <div style={styles.wrapper}>
          <div style={styles.calendarWrapper}>
            <DayPicker
              ref="daypicker"
              initialMonth={ this.state.calendarMonth }
              localeUtils={ LocaleUtils }
              modifiers={{
                selected: day => DateUtils.isSameDay(selectedDay, day)
              }}
              locale="ru"
              onDayClick={ this.handleCalendarDayClick.bind(this) }
              />

              { showCalendarInput && <input
                  ref="input"
                  type="text"
                  value={ this.state.calendarValue }
                  placeholder="YYYY-MM-DD"
                  onChange={ this.handleCalendarInputChange.bind(this) }
                  onFocus={ this.showCalendarCurrentDate.bind(this) } />}
          </div>

          <div style={styles.formWrapper}>
            <form style={styles.base} onSubmit={handleSubmit}>

              <h4>Исходные данные расчета</h4>

              <ul style={styles.ul}>
                <li style={styles.li}>
                  <select style={styles.select} key="star" onChange={this.handleSelectStarChange.bind(this)}>
                    {starOptions}
                  </select>
                </li>
              </ul>

              <div style={styles.formSwitcher}>
                <label>
                  <input type="checkbox"/> Включить режим ручной корректировки
                </label>
              </div>

              <div style={styles.hidden}>

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

            </form>
          </div>
        </div>
        <div>
          <div style={styles.buttonWrapper}>
            <Button handler={handleSubmit}>
              Расчитать календарь наблюдений
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    float: 'left',
    width: '100%',
    borderTop: 'solid 1px #e2e2e2',
    borderBottom: 'solid 1px #e2e2e2',
  },
  calendarWrapper: {
    float: 'left',
    width: '275px',
    paddingRight: '2em',
    marginRight: '2em',
    borderRight: 'solid 1px #e2e2e2'
  },
  formWrapper: {
    float: 'left',
    width: '550px'
  },
  buttonWrapper: {
    float: 'left',
    width: '100%',
    marginTop: '2em'
  },
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
    fontSize: '1.15em',
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
    fontSize: '1.15em',
    border: 'solid 1px #e2e2e2',
    borderRadius: '0px',
    // appearance: 'none',
    backgroundColor: 'white',
    marginBottom: '0.25em',
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
