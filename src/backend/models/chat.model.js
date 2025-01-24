import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    
    message: {
      type: String,
      trim: true,
      required: true,
    },
    sender: {
      type: String    ,
      required: true,
    },
    reciever: {
    type: String    ,
      required: true,
    },
    
  },  
  { timestamps: true }
);

export const Chat = mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
