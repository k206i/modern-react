import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [
      classes.Button,
      classes.Red
    ].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push( classes.red );
  }
  if (props.persons.length <= 1) {
    assignedClasses.push( classes.bold );
  }

  return (
    <Aux>
      <h1>
        {props.title}
      </h1>
      <p className={assignedClasses.join(' ')}>
        Cool!!
      </p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >
        Switch name
      </button>
    </Aux>
  );
};

export default cockpit;
