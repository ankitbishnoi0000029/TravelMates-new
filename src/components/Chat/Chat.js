'use client'
import { userLogin } from "@/redux/reducers/reducer";
import React from "react";
import { BsSendFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

function Chat() {


  return (
    <section className="bg-[#4a2184] text-white min-h-screen flex items-center justify-center">
    <div className="container p-4">
      <div className="grid grid-cols-12 rounded-lg bg-[#391965] gap-4">
        <div className="col-span-4 p-4 rounded-lg flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Chat Users</h2>
          <ul className="space-y-2">
            <li className="p-3 rounded-lg bg-[#4a2184] cursor-pointer hover:bg-[#614aa8]">
              User 
            </li>
            <li className="p-3 rounded-lg bg-[#4a2184] cursor-pointer hover:bg-[#614aa8]">
              User 2
            </li>
            <li className="p-3 rounded-lg bg-[#4a2184] cursor-pointer hover:bg-[#614aa8]">
              User 3
            </li>
            <li className="p-3 rounded-lg bg-[#4a2184] cursor-pointer hover:bg-[#614aa8]">
              User 4
            </li>
          </ul>
        </div>
  
        <div className="col-span-8 p-4 bg-[#4a2184] rounded-lg flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 bg-[#391965] rounded-lg">
            <div className="space-y-3">
              <div className="bg-[#614aa8] p-3 rounded-lg self-start max-w-xs">
                Hello! How are you?
              </div>
              <div className="bg-[#814ac8] p-3 rounded-lg self-end max-w-xs">
                I'm good, thanks! How about you?
              </div>
            </div>
          </div>
  
          <form className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 p-3 rounded-lg bg-[#391965] text-white outline-none focus:ring-2 focus:ring-[#614aa8]"
              placeholder="Type a message..."
            />
            <span
              className="p-3 items-center gap-2 flex bg-[#614aa8] rounded-lg hover:bg-[#814ac8] transition"
            >
              Send
<BsSendFill className="text-pink-600 " />
            </span>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Chat;
