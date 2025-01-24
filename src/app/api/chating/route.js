import { Chat } from "@/backend/models/chat.model";
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import { dblink } from "@/backend/dbCon/connect";
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

    console.log(ReseverId,"this is coming in chting");
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
    console.log("Decoded token payload:<<<<<<<, ", userID);
    const data = await Chat.find({
      sender: userID,
      reciever: ReseverId
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
  try {
    await mongoose.connect(dblink);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    return NextResponse.json({ Result: "Error connecting to database", error: error.message }, { status: 500 });
  }
  try {
    const authHeader = request.headers.get("Authorization");
    
    console.log(authHeader,"this is coming in chating");
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

    console.log("Secret token:", secretToken);
    console.log("Auth token:", authToken);

    const decoded = jwt.decode(authToken, { complete: true });
    const {userID} = decoded.payload
    console.log("Decoded token payload:<<<<<<<, ", userID);

    const inputdata = await request.json();
    console.log(inputdata,"wwwwwwwwwwwwwwww");
    
    const newChat = new Chat(inputdata); 
    
  const chat = await  newChat.save()

    return NextResponse.json({ Result: true, chat }, { status: 200 });
  } catch (error) {
    console.error("Error saving data:", error.message);
    return NextResponse.json({ Result: "Error saving data", error: error.message }, { status: 500 });
  }

}