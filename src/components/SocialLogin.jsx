import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3">Login With</h1>
      <div className="flex flex-col gap-2">
        <button className="btn btn-wide font-medium border border-sky-500 text-sky-500">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-wide font-medium border text-gray-500 border-gray-500">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
