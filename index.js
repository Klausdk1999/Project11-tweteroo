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

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
console.log("inicio");
app.post('/sign-up', (req, res) => {
  let user=req.params.body;
  console.log(req.body);
  users.push(user);
  res.send(user);
});

app.post('/tweets', (req, res) => {
  let tweet=req.params.body;
  console.log(req);
  tweets.push(tweet);
  res.send(tweet);
});

app.get('/tweets', (req, res) => {

  if(tweets.length<=1){
    res.send();
  }else{
    let last10tweets=[{
      username: "",
      avatar: "",
      tweet: ""
    }];
  
    for(let i=tweets.length-1;i>tweets.length-10;i--){
      if(tweets[i]){
        last10tweets.username=tweets[i].username;
        console.log("username:"+username);
        last10tweets.tweet=tweets[i].tweet;
        console.log("tweet:"+tweet);
      }
      else{
        console.log("vazio");
      }
    }
    console.log("last10tweets.length: "+last10tweets.length);
    console.log("last10tweets: "+last10tweets);
  
    let last10=[{
      username: "",
      avatar: "",
      tweet: ""
    }];
  
    for(let j=0;j<last10tweets.length;j++){
      if(last10tweets[j]){
        last10[j].username=last10tweets[j].username;
        last10[j].tweet=last10tweets[j].tweet;
        let avatarelement = users.find(({ username,tweet },j )=> username === (last10tweets[j].username));
        last10[j].avatar=users[avatarelement];
        console.log("last10: "+last10);
      }else{
      }
    
    }
  
    res.send(last10);
  }
  
});

app.listen(5000);