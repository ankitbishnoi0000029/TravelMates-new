import databaseConnection from "@/backend/databaseConnect";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/backend/models/user.model";

export async function GET(request) {
    const HeaderToken =  request.headers.get("Authorization");
    try {
      databaseConnection();
    } catch (error) {
      console.log("this error in profile api",error);
    }
    
    const envToken = process.env.NEXT_APP_SECRET_TOKEN;
    const authToken = HeaderToken.replace("Bearer ", "").trim();
    const decoded = jwt.decode(authToken, { complete: true });
 
        const userId = decoded.payload.userID
        const user = await User.findOne({_id:userId})    
        return NextResponse.json({ Result: user }, { status: 200 })   
   
    


  }