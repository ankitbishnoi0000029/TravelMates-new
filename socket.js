"use client";

import { io } from "socket.io-client";

// export const socket = io("http://localhost:3000",
//     {transports: ["websocket"],
//         reconnection: true,                  
//       }
// );
let socket;
export const getSocket = () => {
  if (socket) {
    return socket;
  }
  socket = io("http://localhost:3000", {
    autoConnect: false,
  });
  return socket;
};