import React from "react";
import { FaEye, FaStar, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-lg rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="text-sm font-semibold">{news.author.name}</h3>
          <p className="text-xs text-gray-500">
            {new Date(news.author.published_date).toLocaleDateString()}
          </p>
        </div>
        <div className="ml-auto flex space-x-2">
          <FaBookmark className="text-gray-400 cursor-pointer" />
          <FaShareAlt className="text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-2">{news.title}</h2>

      {/* Thumbnail */}
      <img
        src={news.thumbnail_url}
        alt={news.title}
        className="w-full h-[600px] object-cover rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-sm text-gray-600 mb-4">
        {news.details.slice(0, 150)}...{" "}
        <Link to={`/news/${news._id}`} className="text-orange-500">
          Read More
        </Link>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center">
          <FaEye className="text-gray-500 mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
