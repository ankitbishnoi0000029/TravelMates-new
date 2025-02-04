import databaseConnection from "@/backend/databaseConnect";
import { Chat } from "@/backend/models/chat.model";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
    databaseConnection();
 
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
  
  let decoded;
  try {
      decoded = jwt.verify(authToken, secretToken);
      
  } catch (error) {
    return NextResponse.json(
      { Result: "Invalid or expired token" },
      { status: 401 }
    );
  }
  
  
  

  const { userID } = decoded;
  if (!userID) {
    return NextResponse.json(
      { Result: "Invalid token payload, userID missing" },
      { status: 401 }
    );
  }
   console.log(userID,"this is sender ");
   
  try {
    const friendList = await Chat.find({sender:userID}).populate("receiver");
    
    return NextResponse.json(
      { data: friendList },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching friend list:", error);
    return NextResponse.json(
      { Result: "Failed to fetch friend list" },
      { status: 500 }
    );
  }
}
