var Twit = require('twit');
require('./auth.js');

var T = new Twit({
    consumer_key:         consumerKey,
    consumer_secret:      consumerSecret,
    access_token:         accessToken,
    access_token_secret:  accessTokenSecret,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  });
  
  //
  //  tweet 'hello world!'
  //
  T.post('statuses/update', { status: 'This is an automated tweet posted by my very own Twitter bot!' }, function(err, data, response) {
    console.log(data)
  });