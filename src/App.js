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
    state = {
        persons: [
            { name: "Dhwani", age: 25 },
            { name: "Vaidehi", age: 27 },
            { name: "Beena", age: 29 },
        ]
    };
    render() {
        return (
            <div className="App">
                <h1>Hi I'm a react APP</h1>
                <p>This is really working</p>
                <button>Switch names</button>
                <Person name="Dhwani" age="21" />
                <hr/>
                <Person name="Vaidehi" age="23" >My hobby is : Shoes... collecting shoes</Person>
                <hr/>
                <Person name="Beena" age="22" />
            </div>
        );
    }
}

export default App;
