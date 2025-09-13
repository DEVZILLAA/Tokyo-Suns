import React from "react";
import { Link } from "react-router-dom";

const articles = [
  { id: 1, title: "Golden Dragon Makes Giant Tap", summary: "The Tap Out Heard Around The World." },
  { id: 2, title: "Ken Costa Retains Midnight Hobo", summary: "He did." },
  { id: 3, title: "Lord Amadeus is wearing a wig?", summary: "Maybe?" }
];

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4 text-danger">Tokyo Suns</h1>
      <div className="row justify-content-center">
        {articles.map(article => (
          <div key={article.id} className="col-md-3 m-3">
            <div className="card border-dark shadow">
              <div className="card-body bg-dark text-white">
                <h5 className="card-title text-danger">{article.title}</h5>
                <p className="card-text">{article.summary}</p>
                <Link to={`/article/${article.id}`} className="btn btn-danger">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
