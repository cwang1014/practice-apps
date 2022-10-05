import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import InputForm from './components/InputForm.jsx';
import Search from './components/Search.jsx';
import GlossaryList from './components/GlossaryList.jsx';

const App = () => {

  const add = (values) => {
    console.log(`${values.word} ${values.definition} was input`);
    // axios.post('/glossary', values);
  }

  return (
    <div id="app">
      <h1>Glossary App</h1>
      <InputForm onInput={add} />
      <Search />
      <GlossaryList />
    </div>
  );
}
render(<App />, document.getElementById('root'));
