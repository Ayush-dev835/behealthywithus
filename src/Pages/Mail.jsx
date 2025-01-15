import React from "react";
import { useForm } from "react-hook-form";

function Mail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Your name is: ${data.name}, Email is: ${data.email}`);
  };

  return (
    <div className="flex justify-center  items-center p-4 md:p-8 mt-[420px] md:mt-0 ">
      <div className="flex justify-center items-center shadow-lg p-6 bg-white rounded-md w-full md:w-2/3">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex  flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {/* Name Input */}
            <div className="relative flex-1">
              <label htmlFor="name" className="block text-lg font-semibold">
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                className={`mt-2 px-3 py-2 w-full border rounded-md ${
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
            <div className="relative flex-1">
              <label htmlFor="email" className="block text-lg font-semibold">
                Your email
              </label>
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
                className={`mt-2 px-3 py-2 w-full border rounded-md ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <span className="absolute text-red-500 text-sm -bottom-6 left-2">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mt-6">
            {/* Department Select */}
            <div className="relative flex-1">
              <label htmlFor="department" className="block text-lg font-semibold">
                Department
              </label>
              <select
                id="department"
                {...register("department", { required: "Department is required" })}
                className={`mt-2 px-3 py-2 w-full border rounded-md ${
                  errors.department ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
              </select>
              {errors.department && (
                <span className="absolute text-red-500 text-sm -bottom-6 left-2">
                  {errors.department.message}
                </span>
              )}
            </div>

            {/* Doctor Select */}
            <div className="relative flex-1">
              <label htmlFor="doctor" className="block text-lg font-semibold">
                Doctor
              </label>
              <select
                id="doctor"
                {...register("doctor", { required: "Doctor is required" })}
                className={`mt-2 px-3 py-2 w-full border rounded-md ${
                  errors.doctor ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a Doctor</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
              </select>
              {errors.doctor && (
                <span className="absolute text-red-500 text-sm -bottom-6 left-2">
                  {errors.doctor.message}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-32 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-700 mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mail;
