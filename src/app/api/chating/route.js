import { Chat } from "@/backend/models/chat.model";
import { NextResponse } from 'next/server';
import jwt from "jsonwebtoken";
import databaseConnection from "@/backend/databaseConnect";

export async function GET(request) {
 try {
     await databaseConnection();
 } catch (error) {
    console.log("database",error);
 }
  try {
    const authHeader = request.headers.get("Authorization");
    const ReseverId = request.headers.get("reseverId");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { Result: "Authorization token missing or invalid" },
        { status: 401 }
      );
    }
    const authToken = authHeader.replace("Bearer ", "").trim();
    const secretToken = process.env.NEXT_APP_SECRET_TOKEN;
    if (!secretToken) {
      throw new Error("Secret token is not configured");
    }
    
    
    const decoded = jwt.decode(authToken, { complete: true });
    const {userID} = decoded.payload
  
    const data = await Chat.find({
      $or: [
        {
          $and: [
            { sender: userID },
            { receiver: ReseverId }
          ]
        },
        {
          $and: [
            { sender: ReseverId },
            { receiver: userID }
          ]
        }
      ]
    });
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch chats" },
      { status: 500 }
    );
  }
}


export async function POST(request) {
  // Connect to MongoDB
databaseConnection();

  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { Result: "Authorization token missing or invalid" },
        { status: 401 }
      );
    }

    const authToken = authHeader.replace("Bearer ", "").trim();
    const secretToken = process.env.NEXT_APP_SECRET_TOKEN;
    if (!secretToken) {
      throw new Error("Secret token is not configured");
    }

    // Verify and Decode JWT
    const decoded = jwt.verify(authToken, secretToken); 
    const { userID } = decoded; 
    if (!userID) {
      return NextResponse.json(
        { Result: "Invalid token payload, userID missing" },
        { status: 401 }
      );
    }
  

    // Parse and Validate Input Data
    const inputdata = await request.json();
    
    
    if (!inputdata.message || !inputdata.sender || !inputdata.receiver) {
      return NextResponse.json(
        { Result: "Missing required fields: message, sender, or receiver" },
        { status: 400 }
      );
    }
    // console.log("Input data: ", inputdata);

    // Save Chat to Database
    const newChat = new Chat({
      message: inputdata.message,
      sender: inputdata.sender,
      receiver: inputdata.receiver,
    });
    const chat = await newChat.save();
    return NextResponse.json({ Result: true, chat }, { status: 200 });
  } catch (error) {
    console.error("Error saving data:", error.message);
    return NextResponse.json(
      { Result: "Error saving data", error: error.message },
      { status: 500 }
    );
  }
}
