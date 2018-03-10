import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {

  componentWillMount() {

  }

  state = {
    persons: [
      { id: '123', name: 'Max', age: 28 },
      { id: 'qwe', name: 'Manu', age: 21 },
      { id: 'asd', name: 'Julia', age: 35 },
    ],
    showPersons: false,
    toggleClicked: 0,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 21 },
        { name: 'Julia', age: 37 },
      ],
    })
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;
    const persons = [
      ...this.state.persons
    ];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    })
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [
      ...this.state.persons,
    ];
    persons.splice(personIndex, 1);
    this.setState({
      persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
      return {
        showPersons: !this.state.showPersons,
        toggleClicked: prevState.toggleClicked + 1,
      }
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Aux>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          title={this.props.appTitle}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
