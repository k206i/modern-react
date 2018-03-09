import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '123', name: 'Max', age: 28 },
      { id: 'qwe', name: 'Manu', age: 21 },
      { id: 'asd', name: 'Julia', age: 35 },
    ],
    showPersons: false,
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 21 },
        { name: 'Julia', age: 37 },
      ],
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
    this.setState({
      showPersons: !this.state.showPersons,
    })
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>
          React App
        </h1>
        <p>
          Cool!!
        </p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Switch name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
