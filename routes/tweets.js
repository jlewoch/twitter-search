const express = require('express');
const router = express.Router();
const { searchTweets } = require('../controllers/tweetsController');
/* GET users listing. */
router.post('/', searchTweets);

module.exports = router;
