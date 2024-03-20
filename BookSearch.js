import React, { useState } from 'react';
import './BookSearch.css'; // Import CSS file for BookSearch
import BookCard from './BookCard';

function BookSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=free-ebooks`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data.items || []);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="book-search-container">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for books" 
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div>Error: {error}</div>}
      {searchResults.length > 0 && (
        <div className="card-container">
          {searchResults.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookSearch;
