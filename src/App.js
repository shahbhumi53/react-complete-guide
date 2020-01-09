import React from 'react';
import './App.css';

import Person from "./Person/Person";

function App() {
    return (
        // this is actually call JSX
        // JSX is just syntactic sugar for JavaScript, allowing you to write
        // HTMLish code instead of nested React.createElement(...) calls
        <div className="App">
            <h1>Hi I'm a react APP</h1>
            <p>This is really working</p>
            <Person name="Dhwani" age="21" />
            <Person name="Vaidehi" age="23" />
            <Person name="Beena" age="22" />
        </div>
    );
    // things behind this works like this, that is why in above syntax we
    // do not use React but still import it
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi I\'m a react APP'));
}

export default App;
