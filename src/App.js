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
            { name: "Dhwani", age: 25 },
            { name: "Vaidehi", age: 27 },
            { name: "Beena", age: 10 },
        ],
        otherStateProp: 'Will it be changed ?'
    };

    switchNameHandler = () => {
        // console.log('Hello');
        // DONT'T DO THIS - this.state.persons[0] = "DJ";
        this.setState({
            persons: [
                { name: "DJ", age: 25 },
                { name: "Vaidehi", age: 27 },
                { name: "Beena", age: 48 },
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Hi I'm a react APP</h1>
                <p>This is really working</p>

                {/* make sure not to use round bracket like this.switchNameHandler() as it will
                 execute that functional immediately on load of the page. But we need the
                  function to be executed only when button is clicked. We just passed the
                   reference */}
                <button onClick={ this.switchNameHandler } >Switch names</button>

                <br/>
                <b>{ this.state.otherStateProp }</b>

                <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
                <hr/>
                <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } >My hobby is : Shoes... collecting shoes</Person>
                <hr/>
                <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
            </div>
        );
    }
}

export default App;
