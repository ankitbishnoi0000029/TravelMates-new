"use client";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { BsSendFill } from "react-icons/bs";
import { getSocket } from "../../../socket";
import storeChat, {
  Chating_data,
  friendList,
  getUserDetails,
  userProfile,} from "@/Lib/dataGetApi.js";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import MessageShow from "./MessageShow";
import Friendlist from "./Friendlist";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const router = useParams();
  const chatParams = router?.chat || [];
  const sender = chatParams[1] || "defaultSenderId";
  const receiver = chatParams[3] || "defaultReceiverId";
  const receivername = chatParams[5] || "defaultReceiverId";
  const userToken = useSelector((state) => state.MyStore.userJwtToken);

  const [senderUser, setSenderUserDetail] = useState();
  const [friendslist, setfriendsList] = useState([]);
  const [senderSocketid, setsenderSocketId] = useState();



  const SenderUserDetail = async () => {
    const user = await userProfile(userToken);
    setSenderUserDetail(user.name);
    setsenderSocketId(user.socketUserId);
  };
  const socket = useMemo(() => getSocket().connect(), []);
  useEffect(() => {
    getchat();
    socket.emit("user_connected", { sender, receiver });
    friend();
    SenderUserDetail();
  }, []);

  // emit event

  const friend = async () => {
    const myFrnd = await friendList(sender, userToken);    
    setfriendsList(myFrnd)
  };

  const getchat = async () => {
    const chatdata = await Chating_data(receiver, userToken);
    setMessages(chatdata);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!socket.connected) {
      alert("Socket connection is unavailable. Please try again.");
      return;
    }
    if (input.trim()) {
      socket.emit("hello", {
        message: input,
        sender,
        receiver,
        to: receiver,
      });
      const data = {
        message: input,
        sender,
        receiver,
      }
      storeChat(userToken,{
        message: input,
        sender,
        receiver,
      });
      setInput("");
      setMessages((prevMessages) => [...prevMessages, data])
    } else {
      alert("Please enter a message");
    }
  };
  useEffect(() => {
    socket.on("hello", (payload,arg) => {
      if(arg.sender == receiver)
        setMessages((prevMessages) => [...prevMessages, arg])
    });

    // return () => {
    //   if (socket.connected) {
    //     socket.disconnect();
    //   }
    // };
  }, []);
  return (
    <section className="bg-[url('/banner/banner_bg.png')] text-white min-h-screen flex items-center h-full justify-center">
      <div className="container p-4">
        <div className="md:grid md:grid-cols-12 lg:grid lg:grid-cols-12 rounded-lg  gap-4  lg:h-[80vh] ">
         <Friendlist  friendslist={friendslist}  socket={socket} />
          <div className="col-span-8  bg-[#4a2184] flex flex-col  h-[80vh] ">
              <MessageShow sender={sender} messages={messages} />
            
            <form
              className="mt-4 flex items-center space-x-2"
              onSubmit={sendMessage}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-3 rounded-lg text-pink-600 bg-white outline-none focus:ring-2 focus:ring-[#614aa8]"
                placeholder="Type a message..."
              />
              <button
                type="submit"
                className="p-3 flex items-center gap-2 bg-[#614aa8] rounded-lg hover:bg-[#814ac8] transition">
                Send
                <BsSendFill className="text-pink-600" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;
