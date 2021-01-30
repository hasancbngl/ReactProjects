import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

/* styled-components
const StyledButton = styled.button`
  background-color: ${props => props.showPersonsStyle ? 'red' : 'blue'};
  color: white;
  font: inherit;
  border: 2px solid black;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.showPersonsStyle ? 'salmon' :'green'}; 
    color: black
  }
  `;

  */
 

class App extends Component {
  state = {
    persons: [
      {id:'acv', name: "hasan", age: 24},
      {id:'asd', name: "jack", age: 35},
      {id:'aqw', name: "hun", age: 88}
    ],
    otherState: 'some value'
  };

  inputChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  ageInputChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.age = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    //remove one element
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  } 

  togglePersonHandler = () => {
    const isShowing = this.state.showPersons;
    this.setState({showPersons: !isShowing});
  }

  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
          click = {this.deletePersonHandler.bind(this, index)}
          name = {person.name} 
          age = {person.age}
          key = {person.id}
          changed = {(event) => this.inputChangedHandler(event, person.id)}
          changedAge = {(event) => this.ageInputChangedHandler(event,person.id)}/>
        })}
       </div>
      );
    }

    const cssClasses = [];
    if(this.state.persons.length <=2) {
      cssClasses.push('red'); //classes = ['red'];
    }
       
    if(this.state.persons.length <=1) {
      cssClasses.push('bold'); //classes = ['red', bold];
    }

  return (
   <div className="App">
       <h1>Yo I started!</h1>
       <p className = {cssClasses.join(' ')}>Wanna get better ? Read,Read,read and Code, code, code!</p>
       <br/>
       <StyledButton showPersonsStyle = {this.state.showPersons}
       onClick={this.togglePersonHandler}>Change Name</StyledButton>
       <br/>
       {persons} 
    </div> 
  );
  }
}

export default App;