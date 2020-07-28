import React from "react";
import bookData from './bookData';
import {getBookList} from './Service'; // Contains fetch call
import FormContainer from "./form/FormContainer";
import Results from "./results/results";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bookList: [],
      printType: "all",
      bookType: "none",
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getBookList = getBookList.bind(this);
    this.formatQueryParams = this.formatQueryParams.bind(this);
  }

  // sets the bookList to the dummy data when the app first loads
  componentDidMount() {
    this.setState({
      bookList: bookData
    });
  }

  // helper function to format query params
  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    });
    return queryItems.join('&');
  }

  // Prevent default form submission and call getBookList()
  // to initiate fetch call with updated state data
  handleSubmit(e) {
    e.preventDefault();
    this.getBookList();
  }

  // Will handle updating state for form
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const books = this.state.bookList;
    const error = this.state.error
          ? <div className="error">{this.state.error}</div>
          : "";
    return (
      <main>
        <header className="app-header">
          <h1>Google Book Search</h1>
        </header>

        <FormContainer
          query={this.state.query}
          bookType={this.state.bookType}
          printType={this.state.printType}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        
        <Results 
          bookData={books} 
          error={error} 
        />
      </main>
    );
  }
}

export default App;
