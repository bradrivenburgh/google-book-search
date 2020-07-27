import React from "react";
import bookData from './bookData'
import FormContainer from "./form/FormContainer";
import Results from "./results/results";
import Book from "./results/book";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bookList: [],
      printType: "",
      bookType: "",
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getBookList = this.getBookList.bind(this);
  }

  componentDidMount() {
    this.setState({
      bookList: bookData
    })
  }

  // helper function to format query params
  formatQueryParams() {

  }

  // fetch books from GoogleBooks API and set state
  getBookList() {
    
  }

  // Will handle updating state for form
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Reset state of bookList and call getBookList
  // Can't seem to get the data to clear
  handleSubmit() {
    this.setState(prevState => {
      return {
        ...prevState,
        bookList: []
      }
    });
    this.getBookList();    
  }

  render() {
    const bookList = this.state.bookList.map((book, index) =>
      <Book
        title={book.title}
        author={book.author}
        price={book.price}
        thumbnail={book.thumbnail}
        description={book.description} 
        url={book.url}
        key={index + book.title}
      />
    );

    return (
      <main>
        <FormContainer
          query={this.state.query}
          bookType={this.state.bookType}
          printType={this.state.printType}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results>
          {bookList}
        </Results>
      </main>
    );
  }
}

export default App;
