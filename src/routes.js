const express = require('express');
const router = express.Router();

const slack = require('./services/slack');

router.post('/hi', (req, res) => {
  return slack.postMessage(req.body).then(() => {
    res.send('');
  }).catch(err => {
    console.log(err);
  });
});

router.post('/open-dialog', (req, res) => {
  const { text, trigger_id } = req.body;

  return slack.openDialog(trigger_id, text).then(() => {
    res.send('');
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
