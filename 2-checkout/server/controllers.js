const models = require('./models.js');

module.exports = {
  postForm1: (req, res) => {
    let form = req.body
    let seshid = req.session_id;
    form.sessionid = seshid;
    models.create(form, (err, postedForm) => {
      if (err) {
        res.status(500).end()
      }
      res.status(201).end();
    })
  }
}