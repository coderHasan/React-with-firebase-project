import React from "react";
import SocialLogin from "../SocialLogin";
import SocialLinks from "../SocialLinks";

const RightNav = () => {
  return (
    <div>
      <div className="mb-7">
        <SocialLogin />
      </div>
      <div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default RightNav;
