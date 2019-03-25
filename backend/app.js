const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/api/posts', (req, res, next) => {
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
  res.status(200).json({message: 'Posts fetched succesfully!', posts: posts});
});

module.exports = app;
