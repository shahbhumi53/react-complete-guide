import React from 'react';

const person = (props) => {
    // dynamic content can be part of JSX, just need to wrap it on curly braces
    return <p>I am a { props.name } and { Math.floor(Math.random() * 30) } year old.</p>;
};

export default person;
