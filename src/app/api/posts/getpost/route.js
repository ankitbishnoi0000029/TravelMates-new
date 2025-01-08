import { dblink } from '@/backend/dbCon/connect';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Post } from '@/backend/models/post.model';
export async function GET() {
  try {
    await mongoose.connect(dblink);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    return NextResponse.json({ Result: "Error connecting to database", error: error.message }, { status: 500 });
  }
   const dbdata  =await Post.find();

  return NextResponse.json({ Result: "success" }, { status: 200 });
}
export async function POST(request) {
  try {
    await mongoose.connect(dblink);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    return NextResponse.json({ Result: "Error connecting to database", error: error.message }, { status: 500 });
  }
  try {
    const inputdata = await request.json();
    
    const newUser = new Post(inputdata); 
  const post = await  newUser.save()

    return NextResponse.json({ Result: true, post }, { status: 200 });
  } catch (error) {
    console.error("Error saving data:", error.message);
    return NextResponse.json({ Result: "Error saving data", error: error.message }, { status: 500 });
  }

}
