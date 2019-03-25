const express = require('express');

const app = express();

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
