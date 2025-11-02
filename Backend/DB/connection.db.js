import mongoose from "mongoose";
export const connectioDb=async()=>{
    await mongoose.connect(process.env.MONG_URL).then(res=>{
        console.log("database connected sucessfully")
    }).catch(err=>{
        console.log(err)
        console.log("error occured in db thing")
    })
}