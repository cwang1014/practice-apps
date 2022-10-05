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
  console.log('data from posting', data);
}
let getEntries = () => {
  return Glossary.find({});
}
// 3. Export the models
module.exports.saveEntry = saveEntry;
module.exports.getEntries = getEntries;
// 4. Import the models into any modules that need them
