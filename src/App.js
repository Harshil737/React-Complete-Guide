import React, {Component} from 'react';
import './App.css';
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

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

      style.backgroundColor = 'red';
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>I'm a React App.!</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default App;

// class App extends Component {
//
//   state = {
//     userInput: ''
//   }
//
//   inputChangedHandler = (e) => {
//     this.setState({
//       userInput: e.target.value
//     })
//   }
//
//   deleteCharHandler = (index) => {
//     const text = this.state.userInput.split('');
//
//     text.splice(index, 1);
//
//     const updatedText = text.join('');
//
//     this.setState({userInput: updatedText})
//   }
//
//   render() {
//
//     let charList = this.state.userInput.split('').map((ch, index) => {
//       return <Char clicked={() => this.deleteCharHandler(index)} character={ch} key={index}/>
//     });
//
//     return (
//       <div>
//         <input type='text' value={this.state.userInput} onChange={this.inputChangedHandler}/>
//         <p>{this.state.userInput}</p>
//         <Validation inputLength={this.state.userInput.length}/>
//         {charList}
//       </div>
//     )
//   }
// }
//
// export default App;

// import React, {useState} from 'react';
// import Person from './Person/Person';
// import './App.css';
//
// const app = () => {
//
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Harshil', age: '25'},
//       {name: 'Patel', age: '21'},
//       {name: 'Harshil Patel', age: '27'},
//     ],
//     otherState: 'some other value'
//   })
//
//   const [otherState, setOtherState] = useState('some other state')
//
//   console.log(personsState, otherState)
//
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {name: 'Harshil', age: '53'},
//         {name: 'Patel', age: '21'},
//         {name: 'Harshil Patel', age: '14'},
//       ],
//       otherState: personsState.otherState
//     })
//   }
//
//   return (
//     <div className="App">
//       <h1>I'm a React App.!</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// }
//
// export default app;
