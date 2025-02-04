import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import FromHeader from './FromHeader';

function Registerform() {
  const router = useRouter();
    const {register,handleSubmit,reset,formState: { errors },} = useForm();
      const onSubmit = async (data) => {
        const fetchResponse = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          body: JSON.stringify(data),
        });
        const message = await fetchResponse.json();
    
        if (message.Result) {
          alert("Register successful, now use your superpower");
          router.push('/login')
          reset();
        }
      };
  return (
    <div className="flex justify-center  md:grid-cols-2 items-center text-white  ">
    <div className="max-w-xl mx-auto rounded-lg mt-4 md:mt-0  border-2 backdrop-blur-3xl border-white p-4 ">
      <div className='flex items-center justify-center  mb-2 '>
      <FromHeader />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
         
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
          <div className="flex items-center  justify-between">
            <label>Select Your Gender</label>
            <select
              {...register("gender", {
                required: "Gender is required",
              })}
              className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
              defaultValue=""
            >
              <option value="">Select your gender</option>
              <option  className='text-pink-600' value="male">Male</option>
              <option className='text-pink-600' value="female">Female</option>
              <option className='text-pink-600' value="other">Other</option>
            </select>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
{/* 
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
              className="w-full p-2 text-white font-semibold rounded-lg">
              Sign up
            </button>
          </div>
        </div>
      </form>
        </div>
      <div className="absolute py-4 bottom-0  " >
                <p className="text-sm">
                  Already Registered
                  <span
                    onClick={() => router.push("/login")}
                    className=" text-pink-600 text-sm font-bold hover:cursor-pointer hover:text-blue-800 ">
                    Login here ...
                  </span>
                </p>
              </div>
  </div>
  )
}

export default Registerform