window.onload = headlines;
function search() {
  const question = document.getElementById("qu").value;
  axios.get("http://localhost:3000/search", {
      params: {
          question: question
      }
  }).then(response => {
      let result = response.data;
      displayNews(result)
  }).catch(error => console.error(error));
}
function headlines() {
  axios.get("http://localhost:3000/headlines")
    .then(response => {
      let result = response.data;
      displayNews(result)
    })
    .catch(error => console.error(error));
}
function sports() {
    axios.get("http://localhost:3000/sports")
      .then(response => {
        let result = response.data;
        displayNews(result)
      })
      .catch(error => console.error(error));
  }
function entertainment() {
    axios.get("http://localhost:3000/entertainment")
      .then(response => {
        let result = response.data;
        displayNews(result)
      })
      .catch(error => console.error(error));
  }
  function business() {
    axios.get("http://localhost:3000/business")
      .then(response => {
        let result = response.data;
        displayNews(result)
      })
      .catch(error => console.error(error));
  }
  function technology() {
    axios.get("http://localhost:3000/technology")
      .then(response => {
        let result = response.data;
        displayNews(result)
      })
      .catch(error => console.error(error));
  }
  function displayNews(newsDataArr) {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}
