const trycatchBlock=(contoller)=>async(req,res,next)=>{

    try{

  await contoller(req,res,next)
    }catch(error){
next(error)
    }
  
}
export default trycatchBlock