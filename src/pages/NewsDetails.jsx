import React from "react";
import Header from "../components/Header";
import NAvBar from "../components/NAvBar";
import DetailsCard from "../components/DetailsCard";
import RightNav from "../components/layoutComponents/RightNav";

const NewsDetails = () => {
  return (
    <div className="container mx-auto px-3 md:px-5">
      <div>
        <Header />
      </div>
      <div>
        <NAvBar />
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <h1 className="font-semibold mb-3">Dragon News</h1>
          <DetailsCard />
        </div>
        <div className="col-span-3">
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
