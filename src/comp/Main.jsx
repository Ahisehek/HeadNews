import React, { useState, useEffect } from "react";
import Card from "./Card";

function Main(props) {
  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ad06af027cc047fb911b7f8bfdc7f4a7"
    );
    const jsonData = await response.json();
    console.log(jsonData);
    setArticles(jsonData.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Card
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
