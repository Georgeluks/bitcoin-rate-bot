const Twitter = require('twitter');
require('dotenv').config();


var twitterBot = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
});

twitterBot.tweetar = tweet => {
    console.log("tweet= ", tweet);
    twitterBot.post('statuses/update', {status: tweet }, (error, tweet, res) => {
        if(error) console.log("error", error);
        else 
            console.log("tweet enviado");
    });
};


module.exports = twitterBot;