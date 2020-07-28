import React from "react";
import bookData from './bookData'
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
    this.getBookList = this.getBookList.bind(this);
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

  // fetch books from GoogleBooks API and set state
  getBookList() {
    const endpoint = 'https://www.googleapis.com/books/v1/volumes';
    const {printType, bookType, query} = this.state;
    const key='AIzaSyB_9id_uBur33tk3nx3X-YleLLlxK90QY0';
    const params = (bookType === "none") 
    ? {
      q: query,
      printType: printType,
      key
    } : {
      q: query,
      filter: bookType,
      printType: printType,
      key
    }
    const queryString = this.formatQueryParams(params);
    const url = endpoint + '?' + queryString;
     
    fetch(url)
      .then(response => {
         if (!response.ok) {
           throw new Error(response.statusText);
         }
         return response.json();
      })
      // Add error to state so it can be rendered
      .then(data => {
        if (!data.totalItems) {
          this.setState(prevState => {
            return {
              ...prevState,
              error: "No books found"
            }
          });  
        } else {
          const newBookData = data.items.map(item => {
            return {
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors,
              price: (item.saleInfo.saleability === "FREE" ? "Free"
              : item.saleInfo.saleability === "NOT_FOR_SALE" ? "Not for sale"
              : item.saleInfo.retailPrice.amount),
              thumbnail: item.volumeInfo.imageLinks.thumbnail,
              description: item.volumeInfo.description,
              url: item.volumeInfo.infoLink
            }
          });

          this.setState(prevState => {
            return {
              ...prevState,
              bookList: newBookData,
              error: null
            }
          });
        }        
      })
      .catch(error => {
        this.setState(prevState => {
          return {
            ...prevState,
            error: error.message
          }
        })
      });
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
