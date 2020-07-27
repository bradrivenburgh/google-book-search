import React from 'react';
import FormContainer from './form/FormContainer';
import Results from './results/results';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      price: "",
      thumbnail: "",
      description: "",
      url: "",
      printType: "",
      filter: "",
      query: ""
    }
  }

  render() {
    return (
      <main>
        <FormContainer />
        <Results />
      </main>
    );
  }
}

export default App;