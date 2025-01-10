import { Checkbox } from "@mui/material";
import React from "react";

function SideBar_profile() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className="col-span-3  p-4">
      <div className=" rounded-lg bg-[#391965] shadow-xl shadow-gray-500  sh p-8 mt-5">
        <div >
        <div className='bg-[#391965] flex items-center justify-center text-white p-6' >
            <h1 className='text-lg font-sans font-bold  ' >
               All Post
            </h1>
        </div>
         <div className="px-4 bg-white text-pink-600 mb-2 hover:text-white hover:bg-pink-600 rounded-md py-2">
         <Checkbox {...label} /> <span> All Post</span>
         </div>
         <div className="px-4 bg-white text-pink-600 mb-2 hover:text-white hover:bg-pink-600 rounded-md py-2">
         <Checkbox {...label} /> <span> Latest post</span>
         </div>
         <div className="px-4 bg-white text-pink-600 mb-2 hover:text-white hover:bg-pink-600 rounded-md py-2">
         <Checkbox {...label} /> <span> One day Ago</span>
         </div>
         <div className="px-4 bg-white text-pink-600 mb-2 hover:text-white hover:bg-pink-600 rounded-md py-2">
         <Checkbox {...label} /> <span> One Week Ago</span>
         </div>
         <div className="px-4 bg-white text-pink-600 mb-2 hover:text-white hover:bg-pink-600 rounded-md py-2">
         <Checkbox {...label} /> <span> One Month Ago</span>
         </div>
        
        </div>
      </div>
    </div>
  );
}

export default SideBar_profile;
