import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import moment from 'moment';
import dateFormat from 'dateformat';

@Radium
export default class PlannerResult extends Component {

  render () {
    const {
      planner,
    } = this.props;

    return (
      <div style={styles.base}>
        <h4>Результаты расчета</h4>
        <div style={styles.resultsWrapper}>
          <h5>UTC</h5>
          <ul style={styles.ul}>
            {planner.map(function (item, i) {
              let utcDate = new Date(item.getUTCFullYear(), item.getUTCMonth(), item.getUTCDate(),  item.getUTCHours(), item.getUTCMinutes(), item.getUTCSeconds());
              let date = dateFormat(utcDate, 'dd mmmm, yyyy, HH:MM:ss');
              return <li key={i}>{date}</li>;
            })}
          </ul>
        </div>
        <div style={styles.resultsWrapper}>
          <h5>Ваша временная зона</h5>
          <ul style={styles.ul}>
            {planner.map(function (item, i) {
              let date = dateFormat(item, 'dd mmmm, yyyy, HH:MM:ss');
              return <li key={i}>{date}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const styles = {
  base: {
    float: 'left',
    width: '100%'
  },
  resultsWrapper: {
    float: 'left',
    width: '300px',
    paddingRight: '2em'
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none'
  }
}
