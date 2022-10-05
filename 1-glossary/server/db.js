const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB

mongoose.connect('mongodb://localhost/glossary');

// 2. Set up any schema and models needed by the app

let glossarySchema = mongoose.Schema({
  word: { type: String, unique: true, required: true },
  definition: { type: String, required: true }
});

let Glossary = mongoose.model('Glossary', glossarySchema);

let saveEntry = (data) => {
  return Glossary.create(data);
}

let getEntries = () => {
  return Glossary.find({});
}

let deleteEntry = (word) => {
  return Glossary.deleteOne(word)
}
// 3. Export the models
module.exports.saveEntry = saveEntry;
module.exports.getEntries = getEntries;
module.exports.deleteEntry = deleteEntry;
// 4. Import the models into any modules that need them
