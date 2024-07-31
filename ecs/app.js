const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
  console.log(res)
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
