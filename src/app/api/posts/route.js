import { dblink } from '@/backend/dbCon/connect';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import { Post } from '@/backend/models/post.model';

export async function GET(request) {
  try {
    await mongoose.connect(dblink);
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }

  try {
    const data = await Post.find().populate('user');
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
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
    

    const inputdata = await request.json();
    
    const newPost = new Post({
      ...inputdata, 
      user: userID,   
    }); 
    
  const post = await  newPost.save()

    return NextResponse.json({ Result: true, post }, { status: 200 });
  } catch (error) {
    console.error("Error saving data:", error.message);
    return NextResponse.json({ Result: "Error saving data", error: error.message }, { status: 500 });
  }

}

export async function DELETE(request) {
  try {
    await mongoose.connect(dblink);
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }
  try {
    const data = await Post.find().populate('user');
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}