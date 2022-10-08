const db = require('./db.js');

module.exports = {
  create1: (doc, callback) => {
    db.query('INSERT INTO form (sessionid, username, email, password) VALUES (?, ?, ?, ?)', [doc.sessionid, doc.username, doc.email, doc.password], (err) => {
      console.log('form1 error', err);
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  },
  // update
  create2: (doc2, callback) => {
    db.query('UPDATE form SET addressline1=?, addressline2=?, city=?, state=?, zip=?, phone=? WHERE sessionid=?', [doc2.addressline1, doc2.addressline2, doc2.city, doc2.state, doc2.zip, doc2.phone, doc2.sessionid], (err) => {
      console.log('form2 error', err);
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  },

  create3: (doc3, callback) => {
    db.query('UPDATE form SET ccnumber=?, expiration=?, cvv=?, billingzip=? WHERE sessionid=?', [doc3.ccnumber, doc3.expiration, doc3.cvv, doc3.billingzip, doc3.sessionid], (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  },

  getAll: (seshid, callback) => {
    db.query('SELECT * FROM form WHERE sessionid=?', [seshid], (err, forms) => {
      console.log('getform error', err);
      if (err) {
        callback(err);
      }
      callback(null, forms);
    })
  }
};