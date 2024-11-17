import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const RegisterPage = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
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
                Register your acount
              </h1>
            </div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-gray-500">
                      Your Name
                    </span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-gray-500">
                      Photo URL
                    </span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Photo url"
                    className="input input-bordered"
                    required
                  />
                </div>

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

                <div className="form-control flex items-center gap-2 flex-row mt-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox"
                    required
                  />
                  <p className="text-gray-500">
                    Accept{" "}
                    <span className="font-semibold">Term & Conditions</span>
                  </p>
                </div>

                <div className="form-control mt-3">
                  <button className="btn bg-gray-700 text-white font-semibold">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
