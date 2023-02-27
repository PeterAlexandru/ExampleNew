const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./router');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/test', (req, res) => {
console.log("testing route")
})

app.get('/', (reg, res) => {
   res.send('You are on the base url page / home page')
});

app.listen(port, () => {
    console.log('My app is listening on localhost:${port}')
})