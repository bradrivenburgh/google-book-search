import React from "react";
import FormContainer from "./form/FormContainer";
import Results from "./results/results";

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
      bookType: "",
      query: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Will handle updating state for form
  handleChange(event) {
    const { name, type, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    console.log("Form submitted!");
  }

  render() {
    return (
      <main>
        <FormContainer
          query={this.state.query}
          bookType={this.state.bookType}
          printType={this.state.printType}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results />
      </main>
    );
  }
}

export default App;
