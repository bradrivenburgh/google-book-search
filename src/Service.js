  // fetch books from GoogleBooks API and set state
  export function getBookList() {
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
