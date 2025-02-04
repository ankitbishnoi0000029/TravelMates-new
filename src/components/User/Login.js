"use client";

import { loginUserToken, userId, userLogin } from "@/redux/reducers/reducer";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { PiSpinnerGap } from "react-icons/pi";
import { userProfile } from "@/Lib/dataGetApi.js";

function Login() {
  const [login, setLogin] = useState(false);
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = async (data) => {
    setloading(true);

    const fetchResponse = await axios.post(
      "http://localhost:3000/api/login",
      data
    );
    if (fetchResponse.data.token) {
      dispatch(userLogin());
      dispatch(loginUserToken(fetchResponse.data.token));

      setLogin(true);
      reset();
      router.push("/");
      setloading(false);
      const getuserId = async () => {
        const userDetail = await userProfile(fetchResponse.data.token);
        dispatch(userId(userDetail._id));
      };
      getuserId();
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setLogin(false);
  };

  return (
    <section className="h-[100vh] bg-[url('/banner/banner_bg.png')]">
      <div className="h-full ">
        <div className=" h-full  flex  justify-center items-center text-white mx-auto">
          <div className=" md:grid-cols-2 items-center text-white px-12">
            <div className="backdrop-blur-3xl mx-auto rounded-lg p-6 mt-4 md:mt-0 h-[70vh] border-2 relative">
              <div className="text-3xl  text-center p-10">
                <h3 className="font-medium text-white pb-2">Login to Your Account</h3>
                <p className="text-lg text-slate-400">
                  Login to your account and find your mate with us!
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label>Enter your Email</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="Enter Your Email"
                      type="email"
                      className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}

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
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}

                </div>
                  <div className="p-2  mt-4 rounded-lg bg-pink-600">
                    <button
                      className="w-full p-2 text-white font-semibold rounded-lg  ">
                      {loading ? (
                        <div className="flex rotate-180 justify-center text-xl items-center">
                          <PiSpinnerGap />
                        </div>
                      ) : (
                        "login In"
                      )}
                    </button>
                  </div>
              </form>
              <div className="absolute py-4 bottom-0  " >
                <p className="text-sm">
                  New User's ...
                  <span
                    onClick={() => router.push("/signup")}
                    className=" text-pink-600 text-sm font-bold hover:cursor-pointer hover:text-blue-800 ">
                    Register here
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Snackbar
          open={login}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}>
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}>
            Login successful!
          </Alert>
        </Snackbar>
      </div>
    </section>
  );
}

export default Login;
