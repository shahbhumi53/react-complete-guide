import React from 'react';

const person = (props) => {
    // dynamic content can be part of JSX, just need to wrap it on curly braces
    /*this will render anything between tag of Person in JSX */
    return (
        <div>
            <p>I am a { props.name } and { Math.floor(Math.random() * 30) } year old.</p>
            <p>{ props.children }</p>
        </div>
    );
};

export default person;
