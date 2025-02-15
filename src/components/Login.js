import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, setisSignin] = useState(true);
  const toggleSignInForm = () => {
    setisSignin(!isSignin);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-full w-full backdrop-blur-sm shadow-sm"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg"
          alt="bg-img"
        ></img>
      </div>

      <div>
        <div className=" flex items-center justify-center p-48 bg-opacity-15">
          <form className="w-96 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-white text-xl font-semibold text-center mb-4">
              {isSignin ? "SignIn" : "SignUp"}
            </h2>

            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
            />
            {!isSignin && (
              <input
                type="text"
                placeholder="Full Name "
                className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
              />
            )}

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white p-3 rounded"
            >
              {isSignin ? "SignIn" : "SignUp"}
            </button>
            <center>
              <p
                className="font-semibold text-white"
                onClick={toggleSignInForm}
              >
                {isSignin
                  ? "new to netflix? sign up now"
                  : "already registered.. sign in"}
              </p>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
