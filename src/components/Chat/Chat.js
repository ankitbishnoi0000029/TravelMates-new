"use client";
import React from "react";
import { BsSendFill } from "react-icons/bs";
import { useEffect, useState, useMemo } from "react";
import {  getSocket } from "../../../socket";

function Chat() {
 

  const [input, setInput] = useState("");
  const [received, setReceived] = useState([]);

  const socket = useMemo(() => {
    const socket = getSocket();
    return socket.connect();
  }, []);

  useEffect(() => {
   
console.log('socket=>', socket)
    socket.on("hello", (payload) => {
      setReceived((prevMessages) => [...prevMessages, payload])
      setInput('')
      
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  

  const sendMessage = (e) => {
    if(input){
      e.preventDefault();
      socket.emit("hello", input);

    }
    else{
      alert("plase enter some ")
    }
  };

  return (
    <section className="bg-[#4a2184] text-white min-h-screen flex items-center justify-center">
      <div className="container p-4">
        <div className="grid grid-cols-12 rounded-lg bg-[#391965] gap-4">
          <div className="col-span-4 p-4 rounded-lg flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">Chat Users</h2>
           <p>Status: {socket.connected ? "connected" : "disconnected"}</p>
           
            <ul className="space-y-2">
              <li className="p-3 rounded-lg bg-pink-600 text-white hover:bg-white hover:text-pink-600 ">
               {socket.id}
              </li>
              
            </ul>
          </div>

          <div className="col-span-8 p-4 bg-[#4a2184] rounded-lg flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 bg-[#391965] rounded-lg">
              <div className="space-y-3">
                  Hello! How are you?
                  {received.map((item, index) => (
                <div key={index} className="bg-white text-pink-600 p-3 rounded-lg self-start max-w-xs">
    {item}
                </div>
                  ))}
                <div className="float-end bg-pink-600 p-3 rounded-lg self-end max-w-xs">
                  I'm good, thanks! How about you?
                </div>
              </div>
            </div>

            <form className="mt-4 flex items-center space-x-2">
              <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className="flex-1 p-3 rounded-lg text-pink-600 bg-white outline-none focus:ring-2 focus:ring-[#614aa8]"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                
                className="p-3 items-center gap-2 flex bg-[#614aa8] rounded-lg hover:bg-[#814ac8] transition">
                Send
                <BsSendFill className="text-pink-600 " />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;
