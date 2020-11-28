const express = require('express');
const { PORT, HOST } = require('./config');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    message: "Hello node from docker compose"
  });
});

app.listen(PORT, HOST, () => {
  console.log('> [Debbuging...] Server Running!!')
});