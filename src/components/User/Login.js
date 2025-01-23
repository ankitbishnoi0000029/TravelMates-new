"use client";

import { NoNavbarLayout } from "@/app/layout";
import { userLogin } from "@/redux/reducers/reducer";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

function Login() {
  const [login, setLogin] = useState(false); 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const count  =useSelector(state=>state);
console.log(count,">>>>")
  const onSubmit = async (data) => {
    try {
      const fetchResponse = await axios.post("http://localhost:3000/api/login", data);

      if (fetchResponse.data.token) {
        dispatch(userLogin());
        setLogin(true); 
        reset(); 

        await axios.get("http://localhost:3000/api/posts", {
          headers: {
            Authorization: `Bearer ${fetchResponse.data.token}`,
          },
        });

        router.push("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setLogin(false); 
  };

  return (
    <div>
      
      <div className="w-full bg-[url('/banner/banner_bg.png')] text-white mx-auto flex justify-center items-center">
        <div className="text-3xl max-w-fit text-center p-10">
          <h3 className="font-medium pb-2">Login to Your Account</h3>
          <p className="text-lg text-slate-400">
            Login to your account and find your mate with us!
          </p>
        </div>
      </div>

     
      <div className="bg-[#391965] md:grid-cols-2 items-center text-white p-6">
        <div className="max-w-xl mx-auto rounded-lg p-6 mt-4 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
             
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
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

             
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
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

              <div className="p-2 my-4 rounded-lg bg-pink-600">
                <button
                  className="w-full p-2 text-white font-semibold rounded-lg"
                  disabled={Object.keys(errors).length > 0}
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    
      <Snackbar
        open={login}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
          Login successful!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
