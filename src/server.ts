import express from "express";

const app = express();

app.get('/test', (request, response) => {
  return response.send("olá")
});

app.post('/test-post', (request, response) => {
  return response.send('hahaha, haha')
})

app.listen(3333, () => {
  console.log('server is up and running on port 3333')
})