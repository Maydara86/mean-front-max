const express = require('express');
const bodyParser = require('body-parser');

const Post = require('./models/post');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'post added successfully'
  })
})

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
    id: 'ffaj12',
    title: 'Frist post from the server',
    content: 'this is a post from the server side'
    },
    {
      id: 'ffaj13',
      title: 'Second post from the server',
      content: 'this is a post is comming from the server side'
    }
  ];
  res.status(200).json({message: 'Posts fetched successfully!', posts: posts});
});

module.exports = app;
