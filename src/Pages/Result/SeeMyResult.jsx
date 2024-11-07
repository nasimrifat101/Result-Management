import React from "react";
import { useForm } from "react-hook-form";
import Header from "../Components/Header";

const SeeMyResult = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here (e.g., send data to backend)
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow justify-center items-center">
        <div className="card bg-base-100">
          <div className="card-body space-y-3 w-full">
            <p className="text-2xl font-bold">Please Enter Your Credentials</p>

            {/* Form starts here */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <input
                type="text"
                placeholder="Student ID"
                {...register("studentId", {
                  required: "Student ID is required",
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "Invalid Student ID format",
                  },
                })}
                className="input input-bordered input-primary w-96"
              />
              {errors.studentId && (
                <p className="text-red-500 text-sm">{errors.studentId.message}</p>
              )}

              <div>
                <select
                  {...register("examType", {
                    required: "Please select an exam",
                  })}
                  className="select select-bordered w-full"
                >
                  <option value="">
                    Select an Exam
                  </option>
                  <option value="ct1">CT1</option>
                  <option value="ct2">CT2</option>
                  <option value="ct3">CT3</option>
                  <option value="fm">First Monthly</option>
                  <option value="mid">Mid Term</option>
                  <option value="yrf">Year Final</option>
                  <option value="sm">Second Monthly</option>
                  <option value="pt">Pre Test</option>
                  <option value="tst">Test</option>
                  <option value="hsc">HSC</option>
                </select>
                {errors.examType && (
                  <p className="text-red-500 text-sm">{errors.examType.message}</p>
                )}
              </div>

              <div className="card-actions w-full">
                <button type="submit" className="btn btn-primary w-full">
                  See Result
                </button>
              </div>
            </form>
            {/* Form ends here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeMyResult;
