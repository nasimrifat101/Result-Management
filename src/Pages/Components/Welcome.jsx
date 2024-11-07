import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen p-10 flex flex-col items-center justify-center bg-blue-900 space-y-10">
      <p className="text-6xl text-white">Collage Of Finance & Management</p>
      <p className="text-white text-2xl">Result Management System</p>
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="btn px-10 w-40 bg-blue-500 outline-none border-none text-white hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link to="/see-my-result">
          <button className="btn w-40 px-10 bg-blue-500 outline-none border-none text-white hover:bg-blue-600">
            See Result
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
