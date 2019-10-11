import React from 'react';
import Button from './Button';

const Question = (props) => {
  return (
    <article>
      <h2>{props.text}</h2>
      <p>{props.details}</p>
    </article>
  )
}

export default Question;