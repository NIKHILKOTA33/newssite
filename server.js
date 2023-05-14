const express = require('express');
const app = express();
const cors = require("cors")
const API_KEY = "fdd1719fa1424095b082811c3b20016a";
app.use(cors({
    origin: '*',
  }))
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/headlines', (req, res) => {
    var headlines = [];
    var url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.articles.forEach(article => {
          headlines.push(article);
        });
        res.json(headlines);
      })
      .catch(error => console.error(error));
  });
// sports

app.get('/sports', (req, res) => {
    var sports = [];
    var url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.articles.forEach(article => {
          sports.push(article);
        });
        res.json(sports);
      })
      .catch(error => console.error(error));
  });
// entertainment

app.get('/entertainment', (req, res) => {
    var entertainment = [];
    var url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.articles.forEach(article => {
          entertainment.push(article);
        });
        res.json(entertainment);
      })
      .catch(error => console.error(error));
  });
//   business

app.get('/business', (req, res) => {
    var business = [];
    var url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.articles.forEach(article => {
            business.push(article);
        });
        res.json(business);
      })
      .catch(error => console.error(error));
  });
  //technology

app.get('/technology', (req, res) => {
    var technology = [];
    var url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.articles.forEach(article => {
            technology.push(article);
        });
        res.json(technology);
      })
      .catch(error => console.error(error));
  });
// SEARCH

app.get('/search', (req, res) => {
    var search = [];
    const question = req.query.question
    var url = `https://newsapi.org/v2/everything?q=${question}&sortBy=popularity&apiKey=${API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.articles.forEach(article => {
          search.push(article);
        });
        res.json(search);
      })
      .catch(error => console.error(error));
  });
app.listen(3000, () => {
  console.log('listening on port 3000!');
});
