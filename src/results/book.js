import React from 'react';

function Book({title, author, price, 
  thumbnail, description, url}) {
  
    const displayPrice = typeof price === "number" 
  ? "Price: $" + price 
  : "Price: " + price

  return (
    <>
      <div className="book-item">
        <div className="book-img">
          <a href={url}>
            <img 
              src={thumbnail} 
              alt="book cover" 
            />
          </a>
        </div>

        <div className="book-info">
          <h2>{title}</h2>
          <h3>Author: {author}</h3>
          <h3>{displayPrice}</h3>
          <p>{description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Book;