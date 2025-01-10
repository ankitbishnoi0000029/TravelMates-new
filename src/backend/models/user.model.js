import mongoose from 'mongoose'

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
    state : {
        type : String
    },
    city : String,
    addresh : String,
    password : String,
    confirmpassword : String
},{timestamps:true})
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User