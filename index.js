const express = require('express')
const url = require('url');
const querystring = require('querystring');

const app = express()
app.all('/event1', (req, res) => {
   const parsedUrl = url.parse(req.url);
   const query = querystring.parse(parsedUrl.query);
   console.log('request url params', query);
   res.send('Yo!');
})
app.all('/', (req, res) => {
   console.log('yeet');
   res.send('Yo!');
})
app.listen(process.env.PORT || 3000)
