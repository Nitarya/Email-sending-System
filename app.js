const express = require('express');
const app = express();

app.set('view engine', 'ejs');
const port = 3001;

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})