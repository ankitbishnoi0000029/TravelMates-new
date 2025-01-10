"use client";
import React from "react";
import { useForm } from "react-hook-form";

function Banner() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const postdata = await fetch("http://localhost:3000/api/posts/getpost", {
      method: "POST",
      body: JSON.stringify(data),
    });
    alert("your post create successfully");
    reset();
  };

  return (
    <section>
      <div className="grid h-full grid-cols-12 bg-[url('/banner/banner_bg.png')]">
        <div className="col-span-4 mx-auto py-12 flex items-center justify-end">
          <div className="border-4 rounded-2xl border-white p-8 text-white">
            <div>
              <h1 className="text-3xl font-bold py-3">Can you join me?</h1>
              <p className="pb-2 font-serif">Create a post for your trip.</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="flex pb-2 items-center font-serif justify-between">
                    <label>Write Post Title</label>
                    <input
                      {...register("postTitle", {
                        required: "Post title is required",
                      })}
                      className="border rounded-lg w-[65%] border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.postTitle && (
                    <span className="text-red-600">
                      {errors.postTitle.message}
                    </span>
                  )}

                  <div className="flex pb-2 items-center font-serif justify-between">
                    <label>Post Description</label>
                    <textarea
                      {...register("description", {
                        required: "Post description is required",
                      })}
                      className="border rounded-lg w-[65%] border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.description && (
                    <span className="text-red-600">
                      {errors.description.message}
                    </span>
                  )}

                  <div className="flex pb-2 items-center font-serif justify-between">
                    <label>From</label>
                    <input
                      {...register("from", {
                        required: "From location is required",
                      })}
                      className="border rounded-lg w-[65%] border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.from && (
                    <span className="text-red-600">{errors.from.message}</span>
                  )}

                  <div className="flex pb-2 items-center font-serif justify-between">
                    <label>To</label>
                    <input
                      {...register("to", {
                        required: "To location is required",
                      })}
                      className="border rounded-lg w-[65%] border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>
                  {errors.to && (
                    <span className="text-red-600">{errors.to.message}</span>
                  )}

                  <div className="flex pb-2 items-center font-serif justify-between">
                    <label>Upload Image</label>
                    <input
                      type="file"
                      className="border rounded-lg w-[65%] border-white/50 p-2.5 px-3.5 outline-none bg-transparent"
                    />
                  </div>

                  <div className="p-2 my-4 rounded-lg bg-pink-600">
                    <button type="submit" className="w-full">
                      Create Post
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-span-8 px-10 w-full">
          <div className="grid h-full justify-items-center items-end">
            <img
              className="relative z-10 h-[90%]"
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
