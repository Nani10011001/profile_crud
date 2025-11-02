import  express from "express"
import trycatchBlock from "../blocks.trycatch/trycatch.js"
import { Useradd,getProfileData,updateProfile } from "../contollers/user.profile.js"
const router=express.Router()

router.post("/useradd",trycatchBlock(Useradd))
router.get("/getuser",trycatchBlock(getProfileData))
router.put("/upd/:id",trycatchBlock(updateProfile))
export default router