import React from 'react';

function FormComponent({query, bookType, printType, handleChange, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} className="search-form">

      <div className="search-wrapper">
        <label htmlFor="query">Search: </label>
        <input 
          name="query"
          type="text" 
          id="query"
          className="query"
          value={query}
          required
          onChange={handleChange}
        />
        <button>Submit</button>
      </div>

      <div className="search-filters">
        <div className="print-type">
          <label htmlFor="printType">Print Type: </label>
          <select 
            name="printType"
            id="printType" 
            value={printType}
            onChange={handleChange} 
          >
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
        </div>
        <div className="book-type">
          <label htmlFor="bookType">Book Type: </label>
          <select 
            name="bookType"
            id="bookType"
            value={bookType}
            onChange={handleChange} 
          >
            <option value="none">No Filter</option>
            <option value="partial">Partial</option>
            <option value="full">Full</option>
            <option value="free-ebooks">Free-ebooks</option>
            <option value="paid-ebooks">Paid-ebooks</option>
            <option value="ebooks">Ebooks</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default FormComponent;