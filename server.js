const express = require('express')
const axios = require("axios").default;
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(req.params)
  var options = {
    method: 'GET',
    url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/theme/',
    params: {entry: 'clever'},
    headers: {
      'X-RapidAPI-Key': '713065f6a4msha8e579ad9975624p1e2e02jsn582c8a00bbfb',
      'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
    }
  };
  
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
const response={} 
response.data =
{
    "entry": "clever",
    "request": "clever",
    "response": "clever",
    "theme": [
      "education",
      "thinking",
      "experienced",
      "expert",
      "capable",
      "bright",
      "knowledge"
    ],
    "version": "7.4.2",
    "author": "twinword inc.",
    "email": "help@twinword.com",
    "result_code": "200",
    "result_msg": "Success"
  }
  console.log(response.data)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}- http://localhost:3000`)
})