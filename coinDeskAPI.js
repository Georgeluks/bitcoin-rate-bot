const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.coindesk.com/v1/bpi/currentprice.json'
});


module.exports = api;