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
    background: 'white',
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
    borderRadius: '3px'
  }
}
