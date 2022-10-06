require("dotenv").config();
const express = require("express");
const path = require("path");
const { saveEntry, getEntries, deleteEntry, updateEntry } = require('./db.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/glossary', function (req, res) {
  getEntries()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).end())
});

app.post('/glossary', function (req, res) {
  saveEntry(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(404).end());
});

app.delete('/glossary/:word', function (req, res) {
  // console.log('request params', req.params);
  deleteEntry(req.params)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).end())
});

app.put('/glossary/:word', function (req, res) {
  // console.log('req.body', req.body);
  updateEntry(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).end());
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
