import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const NewsCategoris = () => {
  const { data: news } = useLoaderData();
  console.log(news);

  return (
    <div>
      <h1 className="font-semibold mb-3">Dragon News Home</h1>
      <div className="grid gap-5">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews} />
        ))}
      </div>
    </div>
  );
};

export default NewsCategoris;
