import React from "react";
import { useForm } from "react-hook-form";
import Header from "../Components/Header";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Add login logic here, e.g., sending data to the server
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow justify-center items-center">
        <div className="card bg-base-100">
          <div className="card-body space-y-3 w-full">
            <p className="text-2xl font-bold">Please Enter Your Credentials</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 flex flex-col">
              <input
                type="text"
                placeholder="User Name"
                {...register("username", { required: "Username is required" })}
                className="input input-bordered input-primary w-96"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username.message}</p>
              )}

              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="input input-bordered input-primary w-96"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}

              <div className="card-actions w-full">
                <button type="submit" className="btn btn-primary w-full">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
