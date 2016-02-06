import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Button extends Component {

  render () {
    return (
      <button style={styles.base}>
        {this.props.children}
      </button>
    );
  }
}

const styles = {
  base: {
    textAlign: 'center',
    padding: '0.5em 1em',
    fontSize: '1em',
    backgroundColor: '#4A90E2',
    color: 'white',
    border: 'none',
    borderRadius: '3px'
  }
}
