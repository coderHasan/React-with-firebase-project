import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const LoginPage = () => {
  const { loginUser, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container mx-auto px-3 md:px-5">
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl text-gray-500 border-b border-gray-300 mb-6 pb-6 font-semibold">
                Login your acount
              </h1>
            </div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-gray-500">
                      Email address
                    </span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-gray-500">
                      Password
                    </span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder=" Enter your password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-3">
                  <button className="btn bg-gray-700 text-white font-semibold">
                    Login
                  </button>

                  <p className="font-semibold mt-3 text-gray-500">
                    Dont’t Have An Account ?{" "}
                    <Link to="register" className="text-red-500 font-semibold">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
