// Set up server
import express from 'express';
import request from 'request';
import fs from 'fs';
import cron from 'node-cron';
import path from 'path';
import apiResponse from './apiController.js';

const port = 9222;
const apiServer = 'https://www.coincalculators.io/api/allcoins.aspx?hashrate=1000000';
const app = express();

app.use(express.static(path.join(__dirname,'/')));

app.listen(port, () => {
  console.log(`server running at ${port} `);
});

cron.schedule('*/50 * * * *', () => {
  request(`${apiServer}`, (err, res, body) => {
    console.log(err);
    console.log('statusCode:', res && res.statusCode);
    fs.writeFile("data/apiResponse.json", body, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    })
  });
});

// Data from form

app.post('/server.js', express.urlencoded(), (req, res, callback) => {
  const cryptocurrency = req.body.cryptocurrency;
  const hashrate = req.body.hashrate;
  const powerConsuming = req.body.powerConsuming;
  res.end(apiResponse(cryptocurrency, hashrate, powerConsuming));
});
