import React from 'react';
import './Person.css';
import Radium from "radium";

/*
 - as props contains something that is comes from outside of the component
 - state is something that is managed inside the component
 - react dom will be re-rendered only in following 2 cases
 - if state changes or prop changes then react will re-render or update the DOM
 */
const person = (props) => {

    const styles = {
        '@media (min-width: 500px)': {
            width: '450px',
        }
    };

    // dynamic content can be part of JSX, just need to wrap it on curly braces
    /*this will render anything between tag of Person in JSX */
    return (
        <div className="Person" style={ styles }>
            {/*<p>I am a { props.name } and { Math.floor(Math.random() * 30) } year old.</p>*/}
            <p onClick={ props.click } >I am a { props.name } and { props.age } year old.</p>
            <p>{ props.children }</p>
            <input type="text"
                   value={ props.name }
                   onChange={ props.changed } />
        </div>
    );
};

export default Radium(person);
