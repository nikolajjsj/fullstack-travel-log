const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'logs',
  });
});

router.post('/', (req, res) => {
  // post a log to the database
});

module.exports = Router;
