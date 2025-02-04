import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      trim: true,
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    SocketId :{
    type : String
    }
  },
  { timestamps: true } 
);

export const Chat = mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
