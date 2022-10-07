const db = require('./db.js');

module.exports = {
  create1: (doc, callback) => {
    db.query('INSERT INTO form1 (sessionid, name, email, password) VALUES (?, ?, ?, ?)', [doc.sessionid, doc.name, doc.email, doc.password], (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  },

  create2: (doc2, callback) => {
    db.query('INSERT INTO form2 (sessionid, addressline1, addressline2, city, state, zip, phone) VALUES (?, ?, ?, ?, ?, ?, ?)', [doc2.sessionid, doc2.addressline1, doc2.addressline2, doc2.city, doc2.state, doc2.zip, doc2.phone], (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  },

  create3: (doc3, callback) => {
    db.query('INSERT INTO form3 (sessionid, ccnumber, expiration, cvv, billingzip) VALUES (?, ?, ?, ?, ?)', [doc3.sessionid, doc3.ccnumber, doc3.expiration, doc3.cvv, doc3.billingzip], (err) => {
      console.log('form3 error', err);
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }
};