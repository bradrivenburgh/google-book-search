import React from 'react';

function Book(props) {
  return (
    <div className="book">
      <h2>{props.title}</h2>
      <h3>Author: {props.author}</h3>
      <h3>Price: ${props.price}</h3>
      <h3>{props.description}</h3>
      <a href={props.url}>
        <img 
          src={props.thumbnail} 
          alt="book cover" 
        />
      </a>
    </div>
  );
}

export default Book;