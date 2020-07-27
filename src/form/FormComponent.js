import React from 'react';

function FormComponent() {
  return (
    <div>
      <label htmlFor="query">Search: </label>
      <input 
        type="text" 
        name="query"
        id="query"
        value="prop from state here" 
      />

      <label htmlFor="printType">Print Type: </label>
      <select id="printType" value="props from state">
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>

      <label htmlFor="bookType">Book Type: </label>
      <select id="bookType" value="props from state">
        <option value="no-filter">No Filter</option>
        <option value="partial">Partial</option>
        <option value="full">Full</option>
        <option value="free-ebooks">Free-ebooks</option>
        <option value="paid-ebooks">Paid-ebooks</option>
        <option value="ebooks">Ebooks</option>
      </select>
    </div>
  );
}

export default FormComponent;