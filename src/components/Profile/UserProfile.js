'use client'
import { userProfile } from "@/Lib/dataGetApi.js";
import React, { useEffect } from "react";

 function UserProfile() {
 
useEffect(()=>{
  userProfile();
},[])
  

  return (
    <section className="bg-[#4a2184] text-white">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 rounded-lg bg-[#391965] p-4">
          <div className="col-span-1 lg:col-span-3 p-4">
            <div className="rounded-lg bg-white text-black shadow-lg p-6">
              <div className="flex flex-col items-center">
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-pink-500">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Profile Picture"
                    className="object-cover w-full h-full"
                  />
                  <span className="absolute top-0 right-0 text-sm font-bold px-2 py-1 rounded-full">
                    ★
                  </span>
                </div>
                <h2 className="text-lg font-semibold pt-4">Jenna Smith</h2>
                <p className="text-gray-500 my-3 text-center">Art Director</p>
                <button
                  className="bg-pink-500 text-white px-6 py-2 rounded-full mt-3 hover:bg-pink-600 transition"
                  aria-label="Follow Jenna Smith"
                >
                  Follow
                </button>
              </div>
              <div className="flex justify-around py-6">
                <div className="text-center">
                  <p className="text-xl font-bold">42</p>
                  <p className="text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">1,302</p>
                  <p className="text-gray-500">Following</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">18K</p>
                  <p className="text-gray-500">Likes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-9">
            <div className="h-48 mb-6">
              <img
                src="user/bgpro.jpg"
                alt="Background Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="max-w-6xl mx-auto p-5">
              <section>
                <h3 className="text-xl font-semibold">My Posts</h3>
                <div className="flex items-center gap-4 mt-4 flex-wrap">
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                  <button
                    className="text-blue-500 underline mt-2"
                    aria-label="View more collections"
                  >
                    View more
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
