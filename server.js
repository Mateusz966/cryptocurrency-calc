const express = require('express');
const request = require('request');
const fs = require('fs');
const cron = require('node-cron');

const port = 8080;
const apiServer = 'https://www.coincalculators.io/api/allcoins.aspx?hashrate=100000000';
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`server running at ${port} `);
});


cron.schedule('* * */2 * *', () => {
  request(`${apiServer}`, (err, res, body) => {
    console.log(err);
    console.log('statusCode:', res && res.statusCode);
    fs.writeFile("data/apiResponse.json", body, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
});