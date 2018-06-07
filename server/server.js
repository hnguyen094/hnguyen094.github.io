const express = require('express');
const bodyParser = require('body-parser');
const googleSheets = require('gsa-sheets');

const key = require('./privateSettings.json');

// TODO(you): Change the value of this string to the spreadsheet id for your
// GSA spreadsheet. See HW5 spec for more information.
const SPREADSHEET_ID = '1b4FJDB49f5rrVWac8TR-13xHM3un6Ru_jAZWpIW4eI8';

const app = express();
const jsonParser = bodyParser.json();
const sheet = googleSheets(key.client_email, key.private_key, SPREADSHEET_ID);

app.use(express.static('public'));

async function onGet(req, res) {
  const result = await sheet.getRows();
  const rows = result.rows;
  let titles_arr = rows[0];
  let items_arr = [];
  for(let i =1; i < rows.length; i ++)
  {
      let temp_map = {};
      for (let j=0; j < titles_arr.length; j++)
      {
          temp_map[titles_arr[j]] = rows[i][j];
      }
      items_arr.push(temp_map);
  }
  res.json(items_arr);
}
app.get('/api', onGet);

async function onPost(req, res) {
  const messageBody = req.body;
  const full = await sheet.getRows();
  const rows = full.rows;
  let result = rows[0];
  for(let i =0; i < result.length; i++) {
    result[i] = messageBody[rows[0][i]];
  }
  const resultVal = await sheet.appendRow(result);
  res.json(resultVal);
}
app.post('/api', jsonParser, onPost);

async function onPatch(req, res) {
  const column  = req.params.column;
  const value  = req.params.value;
  const messageBody = req.body;
  const sheets = await sheet.getRows();
  const rows = sheets.rows;
  let index = 0;
  let keyToIndex = {};
  for(let i =0; i <rows[0].length; i++) {
    if(rows[0][i] === column) {
        index = i;
        break;
    }
  }
  for(let i =0; i < rows[0].length; i++) {
        keyToIndex[rows[0][i]]=i;
  }
  let result;
  let index2;
  for(let i =1; i < rows.length; i++) {
    if(rows[i][index] === value) {
        index2 = i;
        //result = await sheet.setRow(i);
        break;
    }
  }
  let newRow = rows[index2];
  for(const object in messageBody) {
    newRow[keyToIndex[object]]=messageBody[object];
  }
  result = await sheet.setRow(index2, newRow);
  res.json(result);
}
app.patch('/api/:column/:value', jsonParser, onPatch);

async function onDelete(req, res) {
  const column  = req.params.column;
  const value  = req.params.value;
  const sheets = await sheet.getRows();
  const rows = sheets.rows;
  let index = 0;
  for(let i =0; i <rows[0].length; i++) {
    if(rows[0][i] === column) {
        index = i;
        break;
    }
  }
  let result;
  for(let i =1; i < rows.length; i++) {
    if(rows[i][index] === value) {
        result = await sheet.deleteRow(i);
        break;
    }
    if(i+1 === rows.length) {
        result = {response:'success'};
    }
  }
  res.json(result);
}
app.delete('/api/:column/:value',  onDelete);


// Please don't change this; this is needed to deploy on Heroku.
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});
