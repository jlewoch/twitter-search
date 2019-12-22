// dependecies
const client = require('../lib/twitter');
// tweets controller container
const tweetsController = {};

// get tweets
tweetsController.searchTweets = (req, res) => {
  try {
    if (!req.body.hasOwnProperty('search')) throw Error('No Search passed');
    client.get(
      'search/tweets',
      { q: req.body.search, count: 10 },
      (error, tweets, response) => {
        if (error) return res.sendStatus(400);
        res.status(200).json(tweets);
      }
    );
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};
module.exports = tweetsController;
