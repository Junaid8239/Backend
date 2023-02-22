const express=require('express');
const router =express.Router()
const model=require('./model')

router.post('/',async(req,res)=>{
   try{ 
    const {name, email}=req.body
    if(!name || name== ""){
        return res.send("name is required")
    }
    if(!email || email== ""){
        return res.send("email is required")
    }

    const oldEmail= await model.findOne({email})
    if(oldEmail){
        return res.send("email already exists");
    }

    

    const saveData=new model({
        name:name,
        email:email
    })
    const data=await saveData.save();
    return res.send(data); 

   }catch(error){
res.send(error);
   }

})


module.exports=router;