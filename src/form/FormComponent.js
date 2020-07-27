import React from 'react';

function FormComponent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="query">Search: </label>
      <input 
        name="query"
        type="text" 
        id="query"
        value={props.query}
        onChange={props.handleChange} 
      />

      <label htmlFor="printType">Print Type: </label>
      <select 
        name="printType"
        id="printType" 
        value={props.printType}
        onChange={props.handleChange} 
      >
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>

      <label htmlFor="bookType">Book Type: </label>
      <select 
        name="bookType"
        id="bookType" 
        value={props.bookType}
        onChange={props.handleChange} 
      >
        <option value="no-filter">No Filter</option>
        <option value="partial">Partial</option>
        <option value="full">Full</option>
        <option value="free-ebooks">Free-ebooks</option>
        <option value="paid-ebooks">Paid-ebooks</option>
        <option value="ebooks">Ebooks</option>
      </select>

      <button>Submit</button>
    </form>
  );
}

export default FormComponent;