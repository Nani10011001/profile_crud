import React from 'react'
import { useState } from 'react'
import Enter_block from './Enter_block'
import BaseURL from '../../Axios/BaseURL.js'
import { Link } from 'react-router-dom'

const FormData = () => {
     const [userdata,setUserdata]=useState({
        name:"",
        email:"",
        bio:""
    })

    const [edituser,setEditUser]=useState({

    })
    const [useriddata,setUserId]=useState()
    const handleSubmit=async(e)=>{


e.preventDefault()
setUserdata((prev)=>(
    {
        ...prev,[e.target.name]:e.target.value
    }
))
    

console.log(userdata)


    }
    // axios submit thing
    const handleAxiosHandle=async()=>{
        
        try {
            if(!userdata.name|| !userdata.email||!userdata.bio){
alert("provide all the fields")
            }
            console.log(`%c userdata:`,'color:orange;font-weigth:900;',userdata)

            const{data}= await BaseURL.post("/useradd",userdata)
            console.log("axios user data",data)

            if(data?.success){
                alert("profile created sucessfully")
                  
                setUserdata({
                name:"",
                email:"",
                bio:""
            })
            }
            setEditUser(false)
            // form reset 
          
          
        } catch (error) {
            console.error("error occured at the axios baby",error)
            
        }
    }
    // edit 
    const EdithandleSubmit=async()=>{
        try{
const {data}=await BaseURL.get("/getuser")
console.log(data)
const user=data.userinfo.user
const Userinfo=user[0]
const id_user=Userinfo._id
console.log(`%c userId: %c${id_user}`,`color:white; font-weight:700;`,`color:orange; font-weight:600;`)
setUserId(id_user)
console.log(useriddata)
//setuserdat
setUserdata({
    name:Userinfo.name,
    email:Userinfo.email,
    bio:Userinfo.bio
})
    setEditUser(true)

    /* setUserId(data.User_data?._id)
    console.log(userid)
 */
}
        catch(error){
console.log(error)
        }
    }
    // update functuin
    const updateHandel=async()=>{
try {
    const{data}=await BaseURL.put(`/upd/${useriddata}`,{
       name:userdata.name,
       email:userdata.email,
       bio:userdata.bio
    })
    console.log(`%cupdated user info:${data?.userupd}`,`color:green;font-weight:800;`)
    if(data?.success){
        alert("updated data succesfully")
    }
} catch (error) {
    console.error("update error occured",error)
}
    }
  return (
    <div>
      {/* from thing */}
    <form  className=' flex justify-center mt-6' >

        <div className='w-1/2 flex flex-col gap-2'>
          
         <Enter_block placeholder="Name" name="name" value={userdata.name} onChange={handleSubmit}  />
         
         <Enter_block placeholder="Email" name="email" value={userdata.email} onChange={handleSubmit} />
         <Enter_block placeholder="Bio" name="bio"value={userdata.bio} onChange={handleSubmit} style="py-6 mb-10 " />
        </div>
    </form>
    <div className='flex justify-center gap-5'>
        <button className='px-6 py-2 text-white font-bold rounded-md bg-gray-500' type='submit' onClick={handleAxiosHandle}>Save</button>
        <button onClick={EdithandleSubmit} className='px-6 py-2 text-white font-bold rounded-md bg-gray-500'>Edit</button>
    <button  className='px-6 py-2 text-white font-bold rounded-md bg-gray-500' onClick={updateHandel}> update</button>
    
    </div>
    
    </div>
  )
}

export default FormData
