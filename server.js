import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

import User from "./src/backend/models/user.model.js";
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  
  io.on("connection", (socket) => {    
    socket.on("user_connected", async (arg) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: arg.sender },
        { $set: { socketUserId: socket.id } },
        { new: true }
      );
    });
    socket.on("hello", async (arg) => {
      console.log(arg,"this is arg");
      const data = await User.findOne({ _id: `${arg.receiver}` });
        io.to(`${data.socketUserId}`).emit("hello",socket.id, arg);
    });
  });
  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
