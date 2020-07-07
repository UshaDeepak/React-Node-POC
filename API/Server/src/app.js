const express = require('express');
const cors = require('cors')
let app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('API server workeing !!!')
});


app.get('/Log',(req, res) => {
    // res.write('reqBody',req.body);
    res.send('Login API server workeing !!!')
    res.end();
});

app.listen(8980, ()=>{
    console.log('listening');
});