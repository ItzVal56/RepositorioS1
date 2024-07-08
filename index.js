const express = require('express');
const app = express();
const port = 2100;

app.get('/', (req, res) => {
  res.send('Hello World! Hi Chava, how have you been :)');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
