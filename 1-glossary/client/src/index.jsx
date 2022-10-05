import React from 'react';
import { render } from 'react-dom';
import InputForm from './components/InputForm.jsx';

const App = () => {
  return (
    <div id="app">
      <p>Hello, World!</p>
      <h1>Glossary App</h1>
      <InputForm />
    </div>
  );
}
render(<App />, document.getElementById('root'));
