import React from 'react';
import Book from './book';

function Results({bookData, error}) {
  const bookList = bookData.map((book, index) =>
    <Book
      title={book.title}
      author={book.author}
      price={book.price}
      thumbnail={book.thumbnail}
      description={book.description} 
      url={book.url}
      key={index}
    />
  );

  return(
    <div className="results">
      {error} {/*This allows an error message to render when it exists*/}
      {bookList}
    </div>
  );
}

export default Results;