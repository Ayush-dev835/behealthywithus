import React from "react";
import { useForm } from "react-hook-form";

function Consultation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Your name is: ${data.name}, Email is: ${data.email}`);
  };

  return (
    <div className="flex w-full justify-center items-center py-16 px-4 md:py-32">
      <div className="py-10 px-8 md:px-16 bg-blue-500 rounded-lg w-full md:w-2/3">
        <h1 className="text-2xl md:text-4xl text-white font-semibold text-center">
          Get A Free Consultation
        </h1>
        <p className="text-md md:text-xl py-4 text-white text-center">
          Drop us a line! We are here to answer your questions 24/7
        </p>
        <div className="flex justify-center items-center mt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-6 md:space-y-0">
              
              {/* Name Input */}
              <div className="w-full md:w-1/2 mb-4 relative">
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                  className={`mt-2  md:mt-2 px-3 py-2 w-full border rounded-md ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <span className="absolute text-red-500 text-sm -bottom-6 left-2">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div className="w-full md:w-1/2 mb-4 relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={` md:-mt-2   mt-2 px-3 w-full py-2 border rounded-md ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <span className="absolute text-red-500 text-sm -bottom-6 left-2">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Company Input */}
              <div className="w-full md:w-1/2 mb-4 relative">
                <input
                  id="company"
                  type="text"
                  placeholder="Enter your company"
                  {...register("company", {
                    required: "Company is required",
                  })}
                  className={`md:-mt-2  mt-2 px-3 w-full py-2 border rounded-md ${
                    errors.company ? "border-red-500" : ""
                  }`}
                />
                {errors.company && (
                  <span className="absolute text-red-500 text-sm -bottom-6 left-2">
                    {errors.company.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-10 w-full md:w-auto">
                <button
                  type="submit"
                  className="mt-4 md:-mt-8 w-full md:w-auto font-semibold px-8 py-2 bg-white text-black rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
