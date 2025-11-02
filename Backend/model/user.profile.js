import mongoose  from "mongoose";
const Schema_design=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    }
    ,
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true
    },
    bio:{
type:String,
maxlength:200,
default:"",
trim:true,


    }
    
    
    
},{
    timestamps:true
})
const ProfileUser=mongoose.model("user_profile",Schema_design)
export default ProfileUser