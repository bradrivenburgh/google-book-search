import React, { useState, useEffect } from "react";
import bookData from './bookData';
import {getBookList} from './Service'; // Contains fetch call
import FormContainer from "./form/FormContainer";
import Results from "./results/results";

function App() {
  const [bookList, setBookList] = useState([]);
  const [printType, setPrintType] = useState("all");
  const [bookType, setBookType] = useState("none");
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setBookList(prevBookList => bookData)
  }, [])

  // helper function to format query params
  const formatQueryParams = (params) => {
    const queryItems = Object.keys(params).map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    });
    return queryItems.join('&');
  }

  // Prevent default form submission and call getBookList()
  // to initiate fetch call with updated state data
  const handleSubmit = (e) => {
    e.preventDefault();
    getBookList(printType, bookType, 
      query, setBookList, setError, 
      formatQueryParams);
  }

  // Will handle updating state for form
  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "query" ? setQuery(value) :
    name === "printType" ? setPrintType(value) :
    setBookType(value);
  }

  const errorMessage = error
        ? <div className="error">{error}</div>
        : "";
  return (
    <main>
      <header className="app-header">
        <h1>Google Book Search</h1>
      </header>

      <FormContainer
        query={query}
        bookType={bookType}
        printType={printType}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      
      <Results 
        bookData={bookList} 
        error={errorMessage} 
      />
    </main>
  );
}

export default App;
