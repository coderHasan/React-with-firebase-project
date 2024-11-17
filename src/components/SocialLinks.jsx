import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3">Find Us On</h1>
      <div>
        <div className="join join-vertical">
          <button className="btn text-gray-600 join-item btn-wide border border-gray-300 ">
            <FaFacebook size={25} className="text-blue-600" />
            Facebook
          </button>
          <button className="btn text-gray-600 join-item btn-wide border border-gray-300">
            <FaTwitter size={25} className="text-sky-500" />
            Twitter
          </button>
          <button className="btn text-gray-600 join-item btn-wide border border-gray-300">
            <FaInstagram className="text-red-400" size={25} />
            Instagran
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
