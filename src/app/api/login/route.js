import { dblink } from '@/backend/dbCon/connect';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import * as jwt  from 'jsonwebtoken'
import User from '@/backend/models/user.model';


export async function POST(request) {
  try {
    await mongoose.connect(dblink);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    return NextResponse.json({ Result: "Error connecting to database", error: error.message }, { status: 500 });
  }
  try {
    const inputdata = await request.json();
    const {email, password} = inputdata
    if (!email || !password) {
        return NextResponse.json({message: "all fields required"})
    }

    const findUser = await User.findOne({
        email
    })

    if (!findUser) {
        return NextResponse.json({message: "this email does not exist"})
    }

    
    var token = jwt.sign( {userID: findUser.id, }, process.env.NEXT_APP_SECRET_TOKEN);
    return NextResponse.json({  token }, { status: 200 });
    
  } catch (error) {
    console.error("Error saving data:", error.message);
    return NextResponse.json({ Result: "Error saving data", error: error.message }, { status: 500 });
  }

}