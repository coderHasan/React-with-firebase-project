import React from "react";
import Marquee from "react-fast-marquee";

const NewsLetter = () => {
  return (
    <>
      <div className="container mx-auto px-3 md:px-5">
        <div className="flex gap-1 items-center bg-base-300 cursor-pointer">
          <div className="bg-red-500 p-2 w-20 text-center  text-white font-semibold">
            Lates
          </div>
          <div>
            <Marquee pauseOnHover={true}>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis, magni.
              </p>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
