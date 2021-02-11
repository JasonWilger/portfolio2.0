const express = require('express');
const app = express();
const PORT = process.env.PORT || 1000;

app.use(express.static('public'))


app.listen(PORT, () => console.log('Server running on port 1000!'));