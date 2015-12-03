import React, { Component, PropTypes } from 'react';
import Container from '../components/Container';
import Radium from 'radium';

@Radium
export default class Main extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <div style={styles.base}>
        {/* this will render the child routes */}
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

const styles = {
  base: {
    maxWidth: '80%',
    marginLeft: '5%'
  }
}
