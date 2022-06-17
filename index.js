const users = [
  {
    username: 'bobesponja', 
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
  }
];

const tweets =[
  {
    username: "bobesponja",
    tweet: "eu amo o hub"
  }
]

let last10tweets=[{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" ,
  tweet: "eu amo o hub"
}];

import {json} from 'express';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

app.post('/sign-up', (req, res) => {
  const {username, avatar} = req.body;
  users.push({username:username, avatar:avatar});
  res.sendStatus(200);
});

app.post('/tweets', (req, res) => {
  const {username, tweet}=req.body;
  tweets.push({username:username, tweet:tweet});
  res.sendStatus(200);
});

app.get('/tweets', (req, res) => {

  if(tweets.length<1){
    res.sendStatus(400);
  }else{
    
    last10tweets=[];
    for(let i=tweets.length-1;i>tweets.length-11;i--){
      if(tweets[i]){
        const {username,tweet}=tweets[i];
        last10tweets.push({username:username,avatar:users.find(({ username,tweet })=> username === tweets[i].username).avatar, tweet:tweet});
      }else{
      }
    }

    res.res.status(201).send(last10tweets);
  }
  
});

app.listen(5000);