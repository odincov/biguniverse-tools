import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import moment from 'moment';

@Radium
export default class PlannerResult extends Component {

  render () {
    const { scheduler } = this.props;

    return (
      <div style={styles.base}>
        <div style={styles.resultsWrapper}>
          <h5 style={styles.header}>Ваша временная зона</h5>
          <ul style={styles.ul}>
            {scheduler && scheduler.map(function (item, i) {
              let date = moment(item).format('DD MMMM YYYY, HH:MM:ss');
              return <li style={styles.li} key={i}>{date}</li>;
            })}
          </ul>
        </div>
        <div style={styles.resultsWrapper}>
          <h5 style={styles.header}>UTC</h5>
          <ul style={styles.ul}>
            {scheduler && scheduler.map(function (item, i) {
              let utcDate = new Date(item.getUTCFullYear(), item.getUTCMonth(), item.getUTCDate(),  item.getUTCHours(), item.getUTCMinutes(), item.getUTCSeconds());
              let date = moment.utc(utcDate).format('DD MMMM YYYY, HH:MM:ss');
              return <li style={styles.li} key={i}>{date}</li>;
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
    width: '100%',
  },
  resultsWrapper: {
    float: 'left',
    width: '100%',
    '@media (min-width: 680px)': {
      width: '50%'
    },
    '@media (min-width: 1024px)': {
      width: '400px'
    }
  },
  header: {
    padding: 0,
    margin: '2em 0 1em'
  },
  ul: {
    padding: 0,
    margin: '0 0 0 1.5em',
  },
  li: {
    padding: '.25em 0'
  }
}
