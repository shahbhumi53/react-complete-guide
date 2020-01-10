import React, { Component } from 'react';
import './App.css';

import Person from "./Person/Person";

// ----------------- FUNCTION BASE DECLARATION OF COMPONENT ---------------//
// function App() {
//     return (
//         // this is actually call JSX
//         // JSX is just syntactic sugar for JavaScript, allowing you to write
//         // HTMLish code instead of nested React.createElement(...) calls
//         <div className="App">
//             <h1>Hi I'm a react APP</h1>
//             <p>This is really working</p>
//             <Person name="Dhwani" age="21" />
//             <hr/>
//             <Person name="Vaidehi" age="23" >My hobby is : Shoes... collecting shoes</Person>
//             <hr/>
//             <Person name="Beena" age="22" />
//         </div>
//     );
//     // things behind this works like this, that is why in above syntax we
//     // do not use React but still import it
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi I\'m a react APP'));
// }


// ----------------- CLASS BASE DECLARATION OF COMPONENT ---------------//
class App extends Component {

    /*
     - as props contains something that is comes from outside of the component
     - state is something that is managed inside the component
     - state is available only in components that are created by extending *Component* class of
     react
     - state is the reserved word
     - SPECIAL CASE : state can be changed and if it changes then it re-render the DOM
     - react dom will be re-rendered only in following 2 cases
     - if state changes or prop changes then react will re-render or update the DOM
     */
    state = {
        persons: [
            { id:'1q', name: "Dhwani", age: 25 },
            { id:'2q', name: "Vaidehi", age: 27 },
            { id:'3q', name: "Beena", age: 10 },
        ],
        otherStateProp: 'Will it be changed ?',
        showPersons: false,
    };

    nameChangedHandler = (event, id) => {
        // find the index
        const personIndex = this.state.persons.findIndex(p => { return p.id === id; });
        // find that particular person(OF COURSE CREATE A COPY)
        const person = { ...this.state.persons[personIndex] };
        // update that particular person name(UPDATE THE COPY)
        person.name = event.target.value;
        // now set in the state, SO FIRST GET COPY FROM STATE
        const persons = [...this.state.persons];
        // -- IN THE COPY UPDATE
        persons[personIndex] = person;
        // DO NOT MUTATE THE STATE DIRECTLY, THAT IS WHY TOO MANY STEPS ARE WRITTEN
        this.setState({ persons: persons });
    };

    deletePersonHandler = (index) => {
        // as we know arrays and objects are reference type, so gettig persons directly from
        // state is actually holding the pointer to state of persons. we are directly mutating
        // the state, which is not the approach to work, it may result in inconsistency of app.
        // SO DO NOT GET STATE VARS DIRECTLY LIKE THIS
        // const persons = this.state.persons;
        // following are the best way and alternatives
        // const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({ persons: persons });
    };

    toggelPersons = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    // KEEP IN MIND - react call the *render* method every time it has to update the DOM
    // here in our case on click of the button we change the state by changing value of
    // showPersons variable, we can decide here if Persons should have JSX code or not
    render() {

        // this is inline style
        // biggest drawback of using this syntax is you can not add css like :hover, :focus etc
        const btnStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        // this.deletePersonHandler.bind(this, index) is another syntax
                        return <Person name={ person.name }
                                       age={ person.age }
                                       key={ person.id }
                                       changed={ (event) => this.nameChangedHandler(event, person.id) }
                                       click={ () => this.deletePersonHandler(index) }/>
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi I'm a react APP</h1>
                <p>This is really working</p>

                {/* make sure not to use round bracket like this.switchNameHandler() as it will
                 execute that functional immediately on load of the page. But we need the
                 function to be executed only when button is clicked. We just passed the
                 reference */}

                <button style={ btnStyle }
                        onClick={ this.toggelPersons } >Switch names</button>
                { persons }
            </div>
        );
    }
}

export default App;
