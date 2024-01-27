const express = require('express');
const app = express();
const port = 4000;

// Middleware для парсинга JSON тела запроса
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/doc.html');
});


app.post('/create-user', (req, res) => {
  const user = req.body;
  console.log(user);
  res.status(201).send('Пользователь создан');
});


app.post('/authenticate', (req, res) => {
  const userCredentials = req.body;
  console.log(userCredentials);
  res.status(200).send('Пользователь аутентифицирован');
});


app.post('/add-product', (req, res) => {
  const product = req.body;
  console.log(product);
  res.status(201).send('Товар добавлен');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
