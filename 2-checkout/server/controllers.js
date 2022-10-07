const models = require('./models.js');

module.exports = {
  postForm1: (req, res) => {
    let form = req.body
    let seshid = req.session_id;
    form.sessionid = seshid;
    models.create1(form, (err) => {
      if (err) {
        res.status(500).end();
      }
      res.status(201).end();
    })
  },

  postForm2: (req, res) => {
    let form2 = req.body;
    let seshid = req.session_id;
    form2.sessionid = seshid;
    models.create2(form2, (err) => {
      if (err) {
        res.status(500).end();
      }
      res.status(201).end();
    })
  }
}