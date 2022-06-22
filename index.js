
import {json} from 'express';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

app.post('/somainversos', (req, res) => {
  const {number1, number2} = req.body;
  let soma=(1/number1)+(1/number2);

  res.status(201).send(soma);
});

app.get('/status', (req, res) => {

  res.status(200).send("API online, use /somainversos com post de um objeto com numero1 e numero2");
  
});

app.listen(5000);