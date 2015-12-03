import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Wrapper extends Component {

  static propTypes = {
    color: PropTypes.string.isRequired
  }

  render () {
    return (
      <div style={[styles.base]}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  base: {
    padding: '1em 0'
  }
}
