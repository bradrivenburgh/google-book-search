import React from 'react';

function Book(props) {
  const price = typeof props.price === "number" 
  ? "Price: $" + props.price 
  : "Price: " + props.price
  return (
    <div className="book">
      <h2>{props.title}</h2>
      <h3>Author: {props.author}</h3>
      <h3>{price}</h3>
      <p>{props.description}</p>
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