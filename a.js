const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello, Anji!');
});

app.listen(8000, '0.0.0.0', () => {
    console.log('Server is running on port 8000');
});
