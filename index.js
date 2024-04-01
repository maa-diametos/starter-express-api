const express = require('express')
const app = express()
app.all('/', (req, res) => {
   console.log('request url params', req);
   res.send('Yo!');
})
app.listen(process.env.PORT || 3000)
