import React, {Component} from 'react';
import classes from './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      {id: 'qwr', name: 'Harshil', age: '25'},
      {id: 'awd', name: 'Patel', age: '21'},
      {id: 'asd', name: 'Harshil Patel', age: '27'},
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (e, id) => {

    const personIndex = this.state.persons.findIndex((p) => p.id === id);

    const person = {...this.state.persons[personIndex]};

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let persons = null;

    let buttonClasses = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                click={this.deletePersonHandler.bind(this, index)}
                age={person.age}
                changed={(e) => this.nameChangeHandler(e, person.id)}
              >My Hobbies: Racing</Person>
            )
          })}
        </div>
      );

      buttonClasses.push(classes.Red)
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>I'm a React App.!</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={buttonClasses.join(' ')} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App;
