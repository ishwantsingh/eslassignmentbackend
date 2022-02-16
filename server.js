const axios = require('axios');
const cors = require('cors');
var express = require('express');
const helmet = require('helmet');

app = express();

app.use(cors());
app.use(helmet());

port = process.env.PORT || 4000;
app.listen(port);

app.get('/', (req, res) => {  
    res.status(200).send(":-)");
});

let headers= { 
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded', 
};

let apiLink = "https://api.eslgaming.com/play/v1/leagues/";

app.get('/league/:leagueId/results', (req, res) => {
    
    axios.get(`${apiLink + req.params.leagueId + "/results"}`, headers)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch((err) => {
            console.log("error",err);
        });    
})

app.get('/league/:leagueId/contestants', (req, res) => {
    
    axios.get(`${apiLink + req.params.leagueId + "/contestants"}`, headers)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch((err) => {
            console.log("error",err);
        });    
})

app.get('/league/:leagueId', (req, res) => {
    
    axios.get(`${apiLink + req.params.leagueId}`, headers)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch((err) => {
            console.log("error",err);
        });    
})