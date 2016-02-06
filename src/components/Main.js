import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import { Layout } from './';

@Radium
export default class Main extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <Layout>
        {/* this will render the child routes */}
        {this.props.children}
      </Layout>
    );
  }
}
