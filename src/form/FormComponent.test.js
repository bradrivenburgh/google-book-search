import React from 'react';
import ReactDOM from 'react-dom';
import FormComponent from './FormComponent';

describe('FormComponent ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});