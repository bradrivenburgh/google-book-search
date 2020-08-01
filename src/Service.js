  // fetch books from GoogleBooks API and set state
  export function getBookList(printType, bookType, 
    query, setBookList, setError, formatQueryParams) {
    
    const endpoint = 'https://www.googleapis.com/books/v1/volumes';
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
    const queryString = formatQueryParams(params);
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
          setError("No books found");
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

          setBookList(newBookData);
          setError(null);
        }        
      })
      .catch(error => {
        setError(error.message);
      });
  }
