import React from "react";
import { hackerPost } from "../assets";
import { Link } from "react-router-dom";
// import { close } from "../assets";

// const colors = {
//   primary: "#060606",
//   background: "#f5f5f5",
//   disabled: "#D9D9D9",
// };

const Login = () => {
  return (
    <>
      <div className="w-full h-screen flex items-start sm:flex hidden">
        <div className="relative w-1/2 h-full flex flex-col">
          <div className="absolute top-[20%] left-[10%] flex flex-col">
            <h1 className="text-4xl text-white font-bold my-4">
              Turn your ideas into reality
            </h1>
            <p className="text-xl text-white font-normal">
              Start for free and get attractive offers from the community
            </p>
          </div>
          <img
            src={hackerPost}
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
          <Link to="/">
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-10 w-10 text-black-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </Link>
          <h1 className="w-full max-w-[550px] mx-auto text-xl text-[#060606] font-semibold mr-auto">
            Interactive Brand
          </h1>

          <div className="w-full flex flex-col max-w-[550px]">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-2xl font-semibold mb-2">Sign In</h3>
              <p className="text-sm mb-2">
                Welcome Back! Please enter your details.
              </p>
            </div>
            <div className="w-full flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-sm">Remember me for 30 days</p>
              </div>
              <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                Forgot Password ?
              </p>
            </div>
            <div className="w-full flex flex-col my-4">
              <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                Sign In
              </button>
            </div>
            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black/40"></div>
              <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
            </div>
            <div className="w-full text-[#060606] my-4 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Sign In with Google
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#060606]">
              Dont have a account?{" "}
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                Sign Up for free
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full h-screen flex items-start sm:hidden">
        <div className=" relative w-full h-full flex flex-col">
          <div className=" absolute w-full h-full bg-[#f5f5f5] flex flex-col p-10 justify-between items-center">
            <Link to="/">
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-10 w-10 text-black-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </Link>
            <h1 className="w-full max-w-[350px] mx-auto text-xl text-[#060606] font-bold mr-auto">
              Interactive Brand
            </h1>

            <div className="w-full flex flex-col max-w-[350px]">
              <div className="w-full flex flex-col mb-2">
                <h3 className="text-2xl font-bold mb-2 ">Sign In</h3>
                <p className="text-sm mb-2">
                  Welcome Back! Please enter your details.
                </p>
              </div>
              <div className="w-full flex flex-col">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2" />
                  <p className="text-sm">Remember me for 30 days</p>
                </div>
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                  Forgot Password ?
                </p>
              </div>
              <div className="w-full flex flex-col my-4">
                <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                  Sign In
                </button>
              </div>
              <div className="w-full flex items-center justify-center relative py-2">
                <div className="w-full h-[1px] bg-black/40"></div>
                <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">
                  or
                </p>
              </div>
              <div className="w-full text-[#060606] my-4 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                Sign In with Google
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <p className="text-sm font-normal text-[#060606]">
                Dont have a account?{" "}
                <span className="font-semibold underline underline-offset-2 cursor-pointer">
                  Sign Up for free
                </span>
              </p>
            </div>
          </div>
          <img
            src={hackerPost}
            alt="login"
            className=" w-full h-full object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default Login;
