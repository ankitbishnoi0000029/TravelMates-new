"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import FromHeader from "../User/FromHeader";
import Registerform from "../User/Registerform";
import { CreatePost } from "@/Lib/dataGetApi.js";
import { Alert, Snackbar } from "@mui/material";

function Banner() {

  const [loading , setLoading] = useState(false)
  const [success,setSuccess] = useState(false)
  const {register,reset,handleSubmit,formState: { errors },} = useForm();
 const token = useSelector((state) => state.MyStore.usertoken);
   const userToken = useSelector((state) => state.MyStore.userJwtToken);
   
   const onSubmit = (data) => {
     setLoading(true)
     CreatePost(data,userToken);
     setLoading(false);
     setSuccess(true);

     reset();
   }

const errorClass = "text-red-600 text-sm w-full text-end";
  return (
    <section className="">
    <div className=" flex items-center justify-center border-1 rounded-2xl  overflow-hidden border-white  bg-[url('/banner/banner_bg.png')] ">
      {/* <div className="md:col-span-6 lg:col-span-5 mx-auto py-12 w-full flex items-center justify-end sm:justify-center">
      <div className="w-full max-w-lg p-6 "> */}
      <div className=" font-normal  p-4 text-white backdrop-blur-3xl ">
        
              <h1 className="text-2xl lg:text-3xl font-bold py-3">Create a post for your trip.</h1>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="flex pt-2 flex-col sm:flex-row items-center font-serif justify-between gap-2">
                    <label className="w-full sm:w-1/3">Write Post Title</label>
                    <input
                      {...register("postTitle", {
                        required: "Post title is required",
                      })}
                      className="border rounded-lg w-full sm:w-2/3 border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.postTitle && (
                    <div className={`${errorClass}`}>
                      {errors.postTitle.message}
                    </div>
                  )}
    
                  <div className="flex pt-2 flex-col sm:flex-row items-center font-serif justify-between gap-2">
                    <label className="w-full sm:w-1/3">Post Description</label>
                    <textarea
                      {...register("description", {
                        required: "Post description is required",
                      })}
                      className="border rounded-lg w-full sm:w-2/3 border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.description && (
                      <div className={`${errorClass}`}>
                      {errors.description.message}
                    </div>
                  )}
    
                  <div className="flex pt-2 flex-col sm:flex-row items-center font-serif justify-between gap-2">
                    <label className="w-full sm:w-1/3">From</label>
                    <input
                      {...register("from", {
                        required: "From location is required",
                      })}
                      className="border rounded-lg w-full sm:w-2/3 border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.from && (
                      <div className={`${errorClass}`}>{errors.from.message}</div>
                  )}
    
                  <div className="flex pt-2 flex-col sm:flex-row items-center font-serif justify-between gap-2">
                    <label className="w-full sm:w-1/3">To</label>
                    <input
                      {...register("to", {
                        required: "To location is required",
                      })}
                      className="border rounded-lg w-full sm:w-2/3 border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.to && (
                      <div className={`${errorClass}`}>{errors.to.message}</div>
                  )}
    
                  <div className="flex pt-2 flex-col sm:flex-row items-center font-serif justify-between gap-2">
                    <label className="w-full sm:w-1/3">Upload Image</label>
                    <input
                      type="file"
                      className="border rounded-lg w-full sm:w-2/3 border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
    
                  <div className="p-2 my-4 rounded-lg bg-pink-600">
                    <button type="submit" className="w-full text-sm sm:text-base">
                      {loading ? "loading...." : "Create Post"}
                    </button>
                  </div>
                </div>
              </form>
            
       
            </div>
          </div>
      {/* </div>
    </div> */}
 
  </section>
  );
}

export default Banner;
