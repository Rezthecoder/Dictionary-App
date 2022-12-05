const express = require('express')
const axios = require("axios");
const app = express()

const port = 3000

app.get('/', (req, res) => {
   return res.sendFile(__dirname + "/index.html");
}

)

app.get('/search', (req, res) => {

//   console.log(req)
//   var options = {
//     method: 'GET',
//     url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/theme/',
//     params: {entry: req.query.entry},
//     headers: {
//       'X-RapidAPI-Key': 'API_KEY'',
//       'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//   res.json(response.data);
//     console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
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
    res.json(response.data)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}- http://localhost:3000`)
  
})