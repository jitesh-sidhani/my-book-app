import React from 'react';

function BookCard({ book }) {
    return (
      <div className="card">
        <div className="card-img-container">
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Book Cover" className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{book.volumeInfo.title}</h5>
          <p className="card-text">Author(s): {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
          <p className="card-text">Publisher: {book.volumeInfo.publisher}</p>
          <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read Book</a>
        </div>
      </div>
    );
  }
  

export default BookCard;
