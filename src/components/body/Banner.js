"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import FromHeader from "../User/FromHeader";
import Registerform from "../User/Registerform";

function Banner() {
  const {register,reset,handleSubmit,formState: { errors },} = useForm();
 const userToken = useSelector((state) => state.MyStore.usertoken);
 const token = localStorage.getItem("token")
 const onSubmit = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create post');
    }

    alert("Your post was created successfully");
    reset();
  } catch (error) {
    console.error("Error creating post:", error);
    alert("An error occurred while creating the post.");
  }
};


  return (
    <section>
    <div className="lg:grid md:grid h-full sm:block items-center md:grid-cols-12 lg:grid-cols-12 bg-[url('/banner/banner_bg.png')]">
      <div className="md:col-span-4 lg:col-span-5 mx-auto py-12 w-full flex items-center justify-end sm:justify-center">
      <div className="w-full max-w-lg p-6 ">
      <div className="border-4 font-normalx rounded-2xl border-white p-8 text-white">
        {
          userToken ? (<>
              <h1 className="text-2xl lg:text-3xl font-bold py-3">Can you join me?</h1>
              <p className="pb-2 font-serif text-sm sm:text-base">
                Create a post for your trip.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="flex pb-2 flex-col sm:flex-row items-center font-serif justify-between gap-2">
                    <label className="w-full sm:w-1/3">Write Post Title</label>
                    <input
                      {...register("postTitle", {
                        required: "Post title is required",
                      })}
                      className="border rounded-lg w-full sm:w-2/3 border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.postTitle && (
                    <span className="text-red-600 text-sm">
                      {errors.postTitle.message}
                    </span>
                  )}
    
                  <div className="flex pb-2 flex-col sm:flex-row items-center font-serif justify-between gap-2">
                    <label className="w-full sm:w-1/3">Post Description</label>
                    <textarea
                      {...register("description", {
                        required: "Post description is required",
                      })}
                      className="border rounded-lg w-full sm:w-2/3 border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.description && (
                    <span className="text-red-600 text-sm">
                      {errors.description.message}
                    </span>
                  )}
    
                  <div className="flex pb-2 flex-col sm:flex-row items-center font-serif justify-between gap-2">
                    <label className="w-full sm:w-1/3">From</label>
                    <input
                      {...register("from", {
                        required: "From location is required",
                      })}
                      className="border rounded-lg w-full sm:w-2/3 border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.from && (
                    <span className="text-red-600 text-sm">{errors.from.message}</span>
                  )}
    
                  <div className="flex pb-2 flex-col sm:flex-row items-center font-serif justify-between gap-2">
                    <label className="w-full sm:w-1/3">To</label>
                    <input
                      {...register("to", {
                        required: "To location is required",
                      })}
                      className="border rounded-lg w-full sm:w-2/3 border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.to && (
                    <span className="text-red-600 text-sm">{errors.to.message}</span>
                  )}
    
                  <div className="flex pb-2 flex-col sm:flex-row items-center font-serif justify-between gap-2">
                    <label className="w-full sm:w-1/3">Upload Image</label>
                    <input
                      type="file"
                      className="border rounded-lg w-full sm:w-2/3 border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
    
                  <div className="p-2 my-4 rounded-lg bg-pink-600">
                    <button type="submit" className="w-full text-sm sm:text-base">
                      Create Post
                    </button>
                  </div>
                </div>
              </form>
              </> ):(<>
              <FromHeader/>
              <Registerform />
              </>
             )
        }
       
            </div>
          </div>
      </div>
  
      <div className="col-span-7 px-10 w-full">
        <div className="grid h-full justify-items-center items-end">
          <img
            className="relative z-10 h-[90%] w-full object-contain"
            src="banner/banner.png"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Banner;
