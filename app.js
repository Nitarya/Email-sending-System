const express = require('express');
const app = express();

app.set('view engine', 'ejs');
const port = 3001;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/send-email', (req, res) => {
    console.log(req.body);
    res.send('I got the data. Check the console. Check the terminal');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})