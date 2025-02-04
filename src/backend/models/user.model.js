import mongoose from 'mongoose'
import { type } from 'node:os';

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        
    },
    email : {
        type : String,
       
    },
    number : {
        type : Number,
       
    },
    username : {
        type : String,
    
    },
    gender : {
        type : String
    },
    country : String,
   
    socketUserId :{
        type : String
    },
   
    addresh : String,
    password : String,
    confirmpassword : String
},{timestamps:true})
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User