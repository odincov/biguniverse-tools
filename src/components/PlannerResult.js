import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import moment from 'moment';
import dateFormat from 'dateFormat';

@Radium
export default class PlannerResult extends Component {

  render () {
    const {
      planner,
    } = this.props;

    return (
      <ul style={styles.base}>
        {planner.map(function (item, i) {
          let date = dateFormat(item, 'dd mmmm, yyyy, h:MM:ss TT');
          return <li key={i}>{date}</li>;
        })}
      </ul>
    );
  }
}

const styles = {
  base: {
  }
}
