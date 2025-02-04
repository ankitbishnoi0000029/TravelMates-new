"use client";

import React, { Suspense, useEffect, useState } from "react";
import SideBar_profile from "./SideBar_profile";
import { PostApi } from "@/Lib/dataGetApi.js";
import { useSelector } from "react-redux";
const PostCard = React.lazy(() => import("./PostCard"))

function Posts() {
  const tokenTrue = useSelector((state) => state.MyStore.usertoken);
  const userToken = useSelector((state) => state.MyStore.userJwtToken);

  const [post, setPost] = useState([]);
   useEffect(() => {
    if(!tokenTrue) return
     PostApi(userToken).then((res) => {
       setPost(res.data);
      });
    }, [tokenTrue]); 
 if(!tokenTrue)return(null)
  return (  
        <section>
        
        <div className="py-4 px-4 md:px-8 lg:px-12 bg-[url('/banner/banner_bg.png')]">
          <div className="flex flex-col lg:flex-row">
        
            <div className="lg:w-1/4 w-full lg:h-[100vh]  lg:sticky top-0 mb-4 lg:mb-0">
              <SideBar_profile />
            </div>
      
           
            <div className="lg:w-3/4 w-full lg:h-[100vh] overflow-scroll scroll_css myScroll">
            <Suspense fallback={<h1>loading..........</h1>}>
              {post?.map((item, index) => (
                <div key={index}>
                  <PostCard item={item} data={item.from} />
                </div>
              ))}
              </Suspense>
            </div>
          </div>
        </div>
      </section> 
   
   

  );
}

export default Posts;
