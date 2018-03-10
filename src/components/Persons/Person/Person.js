import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {

  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name}! And I {this.props.age} years old
        </p>
        <p>
          {this.props.children}
        </p>
        <input
          ref={inp => this.inputElement = inp}
          type='text'
          onChange={this.props.change}
          value={this.props.name}
        />
      </Aux>
    )
  }
}

Person.propTypes = {
  position: PropTypes.number,
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,
};

export default withClass(Person, classes.Person);