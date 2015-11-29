import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class ImageHeader extends Component {

  render () {
    const background = { backgroundImage: 'url('+this.props.image+')' };
    return (
      <div style={[styles.base, background]}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  base: {
    backgroundSize: 'cover',
    textAlign: 'center',
    color: 'white',
    padding: '2em'
  }
}
