import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { reduxForm } from 'redux-form';

import initialValues from '../../utils/initialValues';
import stars from '../../data/binary-stars';

import { Button } from '../';

// Date picker component dependencies
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import LocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ru';

@Radium
export default class PlannerForm extends Component {
  state = {
    calendarValue: moment(), // The value of the input field
    calendarMonth: new Date(), // The month to display in the calendar
    ...initialValues
  }

  static propTypes = {
    plannerUpdate: PropTypes.func.isRequired,
    selectStar: PropTypes.func.isRequred
  }

  handleSelectStarChange (e) {
    const star = e.target.value;
    this.props.selectStar(star);
  }

  handleCalendarDayClick(e, day) {
    const momentDay = moment(day);

    this.setState({
      calendarValue: momentDay,
      calendarMonth: day
    });

    this.props.updateDate(momentDay);
  }

  showCalendarCurrentDate() {
    this.refs.daypicker.showMonth(this.state.calendarMonth);
  }

  render () {
    const selectedDay = moment(this.state.calendarValue, "L", true).toDate();
    const { star } = this.props;

    const starOptions = stars.map((item, i) => {
      const selected = item.name === star.name;
      return <option key={i} value={item.name} selected={selected}>{item.name}</option>;
    });


    return (
      <div style={styles.wrapper}>
        <div style={styles.calendarWrapper}>

          <DayPicker
            ref="daypicker"
            localeUtils={ LocaleUtils }
            modifiers={{ selected: day => DateUtils.isSameDay(selectedDay, day) }}
            locale="ru"
            onDayClick={ this.handleCalendarDayClick.bind(this) }
            />

        </div>
        <div style={styles.formWrapper}>

          <h4>Выберите звезду из списка</h4>

          <ul style={styles.ul}>
            <li style={styles.li}>
              <select style={styles.select} onChange={this.handleSelectStarChange.bind(this)}>
                {starOptions}
              </select>
            </li>
          </ul>

          <p>Ручная корректировка параметров</p>

          <ul style={styles.ul}>
            <li style={styles.li}>
              <input type="text" style={styles.input} key="ep" ref="ep" value={star.ep}/>
              <label style={styles.label}>Начало отсчета (HJD Epoch)</label>
            </li>
            <li style={styles.li}>
              <input type="text" style={styles.input} key="period" ref="period" value={star.period}/>
              <label style={styles.label}>Период (HDJ days)</label>
            </li>
            <li style={styles.li}>
              <input type="text" style={styles.input} key="ra" ref="ra" value={star.ra}/>
              <label style={styles.label}>RA</label>
            </li>
            <li style={styles.li}>
              <input type="text" style={styles.input} key="decl" ref="decl" value={star.decl}/>
              <label style={styles.label}>Decl</label>
            </li>
          </ul>

        </div>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    float: 'left',
    width: '100%',
    boxSizing: 'border-box',
    borderTop: 'solid 1px #e2e2e2',
    marginTop: '1em',
    '@media (min-width: 680px)': {
      borderBottom: 'solid 1px #e2e2e2',
      paddingLeft: '300px'
    }
  },
  calendarWrapper: {
    float: 'left',
    width: '100%',
    borderBottom: 'solid 1px #e2e2e2',
    '@media (min-width: 680px)': {
      width: 'auto',
      marginLeft: '-300px',
      borderRight: 'solid 1px #e2e2e2',
      borderBottom: 'solid 1px transparent'
    }
  },
  formWrapper: {
    float: 'left',
    marginLeft: '-16px',
    paddingLeft: '10px',
    '@media (min-width: 680px)': {
      borderLeft: 'solid 1px #e2e2e2',
    }
  },
  base: {
    textAlign: 'left'
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: '1em 0 2em 0',
  },
  li: {
    display: 'inline-block',
    paddingLeft: '0.15em',
    paddingRight: '0.15em',
    color: '#e2e2e2',
    boxSizing: 'border-box',

    width: '100%',
    '@media (min-width: 680px)': {
      width: '50%'
    },
    '@media (min-width: 1100px)': {
      width: '25%'
    }
  },
  input: {
    padding: '0.25em 0.25em',
    marginBottom: '0.25em',
    border: 'solid 1px #e2e2e2',
    color: 'black',
    backgroundColor: 'white',
    fontSize: '1.1em',
    width: '100%',
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
    marginBottom: '1em'
  },
  select: {
    color: 'black',
    padding: '0.25em 0.5em',
    fontSize: '1.15em',
    border: 'solid 1px #e2e2e2',
    borderRadius: '0px',
    backgroundColor: 'white',
    marginBottom: '0.25em',
  }
}

