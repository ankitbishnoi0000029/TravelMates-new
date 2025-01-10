"use client";
import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const fetchResponse = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const message = await fetchResponse.json();

    if (message.Result) {
      alert("Register successful, now use your superpower");
      reset();
    }

    console.log(data);
  };

  return (
    <div>
      <div className="w-full bg-[url('/banner/banner_bg.png')] text-white mx-auto flex justify-center items-center">
        <div className="text-3xl max-w-fit text-center p-10">
          <h3 className="font-medium pb-2"> Create new Account</h3>
          <p className="text-lg text-slate-400">
            Create to your account and find your mate with us!
          </p>
        </div>
      </div>

      <div className="bg-[#391965] md:grid-cols-2 items-center text-white p-6">
        <div className="max-w-xl mx-auto rounded-lg p-6 mt-4 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-center justify-between">
                <label>Enter Your Name</label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    
                  })}
                  placeholder="Enter Your name"
                  type="text"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              {/* Email */}
              <div className="flex items-center justify-between">
                <label>Enter your Email</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Enter Your Email"
                  type="email"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              {/* Username */}
              <div className="flex items-center justify-between">
                <label>Enter Your Username</label>
                <input
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 6,
                      message: "Username must be at least 6 characters",
                    },
                  })}
                  placeholder="Enter Your username"
                  type="text"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username.message}</p>
              )}

              {/* Password */}
              <div className="flex items-center justify-between">
                <label>Enter Your Password</label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  placeholder="Enter Your Password"
                  type="password"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}

              {/* Gender */}
              <div className="flex items-center justify-between">
                <label>Select Your Gender</label>
                <select
                  {...register("gender", {
                    required: "Gender is required",
                  })}
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                  defaultValue=""
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}

              {/* Country */}
              <div className="flex items-center justify-between">
                <label>Select Your Country</label>
                <select
                  {...register("country", {
                    required: "Country is required",
                  })}
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                  defaultValue=""
                >
                  <option value="">Select your country</option>
                  <option value="usa">USA</option>
                  <option value="india">India</option>
                  <option value="pakistan">Pakistan</option>
                </select>
              </div>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}

              {/* State */}
              <div className="flex items-center justify-between">
                <label>Select Your State</label>
                <select
                  {...register("state", {
                    required: "State is required",
                  })}
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                  defaultValue=""
                >
                  <option value="">Select your state</option>
                  <option value="punjab">Punjab</option>
                  <option value="haryana">Haryana</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state.message}</p>
              )}

              {/* City */}
              <div className="flex items-center justify-between">
                <label>Select Your City</label>
                <select
                  {...register("city", {
                    required: "City is required",
                  })}
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                  defaultValue=""
                >
                  <option value="">Select your city</option>
                  <option value="punjab">Punjab</option>
                  <option value="haryana">Haryana</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}

              {/* Address (updated) */}
              <div className="flex items-center justify-between">
                <label>Enter Full Address</label>
                <input
                  {...register("address", {
                    required: "Address is required",
                  })}
                  placeholder="Enter Your Full Address"
                  type="text"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}

              <div className="p-2 my-4 rounded-lg bg-pink-600">
                <button
                  className="w-full p-2 text-white font-semibold rounded-lg"
                  disabled={Object.keys(errors).length > 0}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
