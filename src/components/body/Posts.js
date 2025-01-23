"use client";

import React, { useEffect, useState } from "react";
import SideBar_profile from "./SideBar_profile";
import PostCard from "./PostCard";
import { PostApi } from "@/Lib/dataGetApi.js";
import { useSelector } from "react-redux";

function Posts() {
  const userToken = useSelector((state) => state.MyStore.usertoken);
  const [post, setPost] = useState([]);
   useEffect(() => {
    if(!userToken) return
     PostApi().then((res) => {
       setPost(res.data);
      });
    }, [userToken]); 
 if(!userToken)return(null)
  return (  
        <section>
        <div className="bg-[#391965] flex items-center justify-center text-white p-6">
          <h1 className="text-lg font-sans font-bold">All Posts</h1>
        </div>
      
      
        <div className="py-4 px-4 md:px-8 lg:px-12 bg-[url('/banner/banner_bg.png')]">
          <div className="flex flex-col lg:flex-row">
        
            <div className="lg:w-1/4 w-full lg:h-[100vh]  lg:sticky top-0 mb-4 lg:mb-0">
              <SideBar_profile />
            </div>
      
           
            <div className="lg:w-3/4 w-full lg:h-[100vh] overflow-y-auto scroll_css">
              {post?.map((item, index) => (
                <div key={index}>
                  <PostCard item={item} data={item.from} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> 
   
   

  );
}

export default Posts;
