import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import { Logotype, Footer } from '../../components';

@Radium
export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render () {
    const { children } = this.props;

    return (
      <div style={styles.base}>
        <Logotype/>
        {children}
        <Footer/>
      </div>
    );
  }
}

const styles = {
  base: {
    maxWidth: '90%',
    margin: '2% 5%',
    '@media (min-width: 1024px)': {
      maxWidth: '80%'
    }
  }
}
