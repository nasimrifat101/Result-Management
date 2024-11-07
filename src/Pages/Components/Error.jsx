import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="py-6">Page Not Found</p>
          <button
            onClick={handleGoBack}
            className="btn btn-xs btn-ghost text-green-800"
          >
            Go Back?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
