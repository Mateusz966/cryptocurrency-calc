// Set up server
import express from 'express';
import request from 'request';
import fs from 'fs';
import cron from 'node-cron';
import path from 'path';
import bodyParser from 'body-parser';
import { apiResponse } from './apiController';

const port = 9222;
const apiServer = 'https://www.coincalculators.io/api/allcoins.aspx?hashrate=1000000';
const app = express();

app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json());

// Check if the directory exist if not it was create directory and empty json file

const jsonResponseDirectory = './data';

const saveDataFromApi = () => {
  request(`${apiServer}`, (err, res, body) => {
    console.log(err);
    console.log('statusCode:', res && res.statusCode);
    fs.writeFile(`${jsonResponseDirectory}/apiResponse.json`, body, (writeError) => {
      if (writeError) throw writeError;
      console.log('The file has been saved!');
    });
  });
};

if (!fs.existsSync(jsonResponseDirectory)) {
  fs.promises.mkdir(jsonResponseDirectory, { recursive: true }).then(() => saveDataFromApi());
} else {
  cron.schedule('*/30 * * * *', () => {
    saveDataFromApi();
  });
}

app.post('/calc-value', (req, res) => {
  const { cryptocurrency, hashrate, powerConsuming } = req.body;

  res.json(apiResponse(cryptocurrency, Number(hashrate), Number(powerConsuming)));
});

app.listen(port, () => {
  console.log(`server running at ${port} `);
});
