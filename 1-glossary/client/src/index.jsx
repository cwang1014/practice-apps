import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import InputForm from './components/InputForm.jsx';
import Search from './components/Search.jsx';
import GlossaryList from './components/GlossaryList.jsx';

const axios = require('axios');

const App = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('/glossary')
      .then(result => setList(result.data))
      .catch(err => console.log('error getting from mongodb'));
  }, []);

  // console.log('list', list);

  const add = (inputObj) => {
    // console.log(`${inputObj.word} ${inputObj.definition} was input`);
    axios.post('/glossary', inputObj)
      .then(result => setList([...list, result.data]))
      .catch(err => console.log('error posting data'));
  }

  const remove = (wordToRemove) => {
    console.log(`deleting ${wordToRemove}`);
    axios.delete(`/glossary/${wordToRemove}`)
      .then(() => {
        var newList = list.filter(wordObj => wordObj.word !== wordToRemove);
        setList(newList);
      })
      .catch(err => console.log('error deleting word', wordToRemove.word))
  }

  return (
    <div id="app">
      <h1>Glossary App</h1>
      <InputForm onInput={add} />
      <Search />
      <GlossaryList list={list} onDelete={remove} />
    </div>
  );
}
render(<App />, document.getElementById('root'));
