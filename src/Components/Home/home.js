import React from "react";
import GetAllNewsService from "../../services/getNews";
import NewsData from "./newsData";

import "./home-styles.css";

export default class Home extends React.Component {
  state = {
    isloaded: false,
    newsList: [],
  };

  componentDidMount() {
    GetAllNewsService().then((res) => {
      this.setState({
        newsList: res.articles,
        isloaded: true,
      });
    });
  }

  render() {
    return this.state.isloaded ? (
      <section className="homePage">
        <div className="row">
          <NewsData newsList={this.state.newsList} />
        </div>
      </section>
    ) : (
      <div class="loader"></div>
    );
  }
}
