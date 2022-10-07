const db = require('./db.js');

module.exports = {
  create: (doc, callback) => {
    console.log('creating doc', doc);
    db.query('INSERT INTO form1 (sessionid, name, email, password) VALUES (?, ?, ?, ?)', [doc.sessionid, doc.name, doc.email, doc.password], (err, postDoc) => {
      if (err) {
        callback(err);
      } else {
        callback(null, postDoc);
      }
    })
  }
};