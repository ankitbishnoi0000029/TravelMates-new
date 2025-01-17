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
      
  // try {
  //   const authHeader = request.headers.get("Authorization");
  //   if (!authHeader || !authHeader.startsWith("Bearer ")) {
  //     return NextResponse.json(
  //       { Result: "Authorization token missing or invalid" },
  //       { status: 401 }
  //     );
  //   }

  //   const authToken = authHeader.replace("Bearer ", "").trim();

  //   const secretToken = process.env.NEXT_APP_SECRET_TOKEN;
  //   if (!secretToken) {
  //     throw new Error("Secret token is not configured");
  //   }
  //   const decoded = jwt.decode(authToken, { complete: true });

  //   let verifiedToken;
  //   try {
  //     verifiedToken = jwt.verify(authToken, secretToken); 
  //   } catch (error) {
  //     return NextResponse.json(
  //       { Result: "Invalid token", error: error.message },
  //       { status: 401 }
  //     );
    // }

   
  //   const dblink = process.env.DATABASE_URL;
  //   if (!dblink) {
  //     throw new Error("Database URL is not configured");
  //   }
  //   if (!mongoose.connection.readyState) {
  //     await mongoose.connect(dblink);
  //   }

  //   const dbdata = await Post.find()
  //     // .populate('user');
 
  //   return NextResponse.json({ Result: "success", data: dbdata }, { status: 200 });
  // }
  // } catch (error) {
  //   console.error("Error occurred during GET request:", error.message);
  //   return NextResponse.json(
  //     { Result: "Internal server error", error: error.message },
  //     { status: 500 }
  //   );
  // }
// }
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

    console.log("Secret token:", secretToken);
    console.log("Auth token:", authToken);

    const decoded = jwt.decode(authToken, { complete: true });
    const {userID} = decoded.payload
    console.log("Decoded token payload:<<<<<<<, ", userID);

    const inputdata = await request.json();
    
    const newPost = new Post({
      ...inputdata,   // Spread the input data into the Post
      user: userID,   // Add the userID to associate the post with the user
    }); 
  const post = await  newPost.save()

    return NextResponse.json({ Result: true, post }, { status: 200 });
  } catch (error) {
    console.error("Error saving data:", error.message);
    return NextResponse.json({ Result: "Error saving data", error: error.message }, { status: 500 });
  }

}
