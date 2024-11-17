import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";

const DetailsCard = () => {
  const { data } = useLoaderData();

  return (
    <div className="card border rounded-lg p-6">
      {/* Thumbnail */}
      <img
        src={data[0].thumbnail_url}
        alt={data[0].title}
        className="w-full h-[600px] object-cover rounded-lg mb-4"
      />
      {/* Title */}
      <h2 className="text-lg font-bold mb-2">{data[0].title}</h2>

      {/* Details */}
      <p className="text-sm text-gray-600 mb-4">{data[0].details}</p>

      <Link
        to={"/"}
        className="flex items-center gap-2 bg-red-400 text-white font-semibold btn w-fit"
      >
        <BiLeftArrow />
        All news in this category
      </Link>
    </div>
  );
};

export default DetailsCard;
