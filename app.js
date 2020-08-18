const app = require('./config/server');
const api = require('./coinDeskAPI');
const twitterBot = require('./config/twitter');


const serverPort = process.env.YOUR_PORT || process.env.PORT || 3000;
const serverHost = process.env.YOUT_HOST || '0.0.0.0';

async function getBTCPrice(){
    try {
        const response = await api.get();
        return response.data.bpi['USD'].rate;
    } catch (error) {
        console.log(error)
    }

};

app.listen(serverPort, serverHost, () => {
    console.log("Aplicação online na porta " + serverPort);
});

app.get('/', async (req, res) => {
    const btcPrice = await getBTCPrice();

    twitterBot.tweetar("Hoje o bitcoin chegou a $" + btcPrice);

    res.json({msg: "Hoje o Bitcoin chegou a $" + btcPrice});
    
});