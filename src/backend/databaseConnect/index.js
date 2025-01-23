import mongoose from "mongoose";
import { dblink } from "../dbCon/connect";
import { NextResponse } from "next/server";

export default function databaseConnection(){
 try {
    mongoose.connect(dblink);
 } catch (error) {
    console.log('data base connction in some error',error)
    return NextResponse.json({error : "database connction in error"},{status:404})
    
 }
}