import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Lotoype extends Component {

  render () {
    return (
      <div style={styles.base}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  base: {
    overflow: 'hidden',
    padding: '2em'
  }
}
