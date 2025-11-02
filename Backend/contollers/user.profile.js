
import ProfileUser from "../model/user.profile.js"

export const Useradd= async (req,res)=>{
const {name,email,bio}=req.body
if(!name||!email||!bio){
    throw new Error("all feilds are requried")
}
const userExist= await ProfileUser.findOne({email}).lean()
if(userExist) return res.status(400).json({success:false, message:"user already exist"})

const user=await ProfileUser({
    name:name,
    email:email,
    bio:bio
})
await user.save()
res.status(200).json({
    success:true,
    message:"its created successfully",
   user:{
    details:user._doc
   }
}

)

}
export const getProfileData=async(req,res)=>{
  const User_data=await ProfileUser.find()
  if(!User_data){
    return res.status(400).json({
        success:false,
        message:"user data doesnot exist"
    })
  }
  res.status(201).json({
    success:true,
    message:"data fectched successfully",
    
userinfo:{
    user:User_data
}
  })
}
export const updateProfile=async(req,res)=>{
const {id}=req.params
const {name,email,bio}=req.body
/* const userExistById=await ProfileUser.findById(id)
if(userExistById){
  return res.status(400).json({
    success:false,
    message:"user already exist"
  })
} */
const updateUser=await ProfileUser.findByIdAndUpdate(
id,{name,email,bio},{new:true}
)
res.status(200).json({
  success:true,
  message:"user update successfully",
  userupd:updateUser
})
}