import React from "react";
import { useLocation } from "react-router-dom";

import "./details-styles.css";

const NewsDetails = () => {
  const location = useLocation();

  const article = location.state.details;

  return (
    <div className="Newsdetails">
      <div className="row">
        <div className="col-sm-12">
          <h3>{article.title}</h3>
          <br></br>
          <img alt={article.title} src={article.urlToImage} />
          <br></br>
          <h5>{article.author}</h5>
          <p>{article.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
