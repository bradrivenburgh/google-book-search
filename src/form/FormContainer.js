import React from 'react';
import FormComponent from './FormComponent';

function FormContainer(props) {
    return (
      <div>
        <FormComponent
          query={props.query}
          bookType={props.bookType}
          printType={props.printType}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />
      </div>
    );
}

export default FormContainer;