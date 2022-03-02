const express = require('express');
const app = express();
const port = 3000;
const insertionController = require('./controllers/insertionContoller')

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/sprint', insertionController.insertSprint, (req, res) => {
  return res.status(200).json(res.locals.sprint);
})

app.post('/role', insertionController.insertRole, (req, res) => {
  return res.status(200).json(res.locals.role);
})

app.post('/person', insertionController.insertPerson, (req, res) => {
  return res.status(200).json(res.locals.person);
})

app.post('/product', insertionController.insertProduct, (req, res) => {
  return res.status(200).json(res.locals.product);
})

app.use('*', (req,res) => {
  res.sendStatus(404);
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})