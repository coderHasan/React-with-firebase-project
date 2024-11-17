import { useContext } from "react";

import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NAvBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="container mx-auto px-3 md:px-5">
      <div className="flex items-center justify-between my-5">
        <div>{user && user.email}</div>
        <div>
          <ul className="flex items-center gap-5 text-gray-500">
            <Link to="/"> Home</Link>
            <li>About</li>
            <li>Carrer</li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <FaUserCircle size={30} />
          {user && user?.email ? (
            <div>
              <Link
                onClick={logOut}
                className="btn bg-gray-900 py-2 text-white font-semibold hover:bg-gray-900"
              >
                Log-Out
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="btn bg-gray-900 py-2 text-white font-semibold hover:bg-gray-900"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NAvBar;
