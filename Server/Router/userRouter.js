const router=require('express').Router()
const user=require('../Model/userSchema')
router.post('/adding',async(req,res)=>{
    console.log("The new student details is",req.body);
    try{
    const newUser=new user(req.body)
    req.body.Email=crypto_js.AES.encrypt(req.body.Email,process.env.crypto).toString()
    const data=await newUser.save()
    res.status(200).json("student details is successfully added")
    }catch(err){
res.status(500).json("student datas not added please check the datas!!!!")
    }
})
router.get('/getdata',async(req,res)=>{
    try{
    const data= await user.find()
    console.log("The students datas are",data);
    res.status(200).json(data)
    }catch(err){
res.status(500).json("failed")
    }
})
    router.delete('/deletedata/:id',async(req,res)=>{
        try{
        const data= await user.findByIdAndDelete(req.params.id)
        console.log("The deleted student data is",data);
        res.status(200).json(data)
        }catch(err){
    res.status(500).json("failed")
        }
    })
    router.put('/updatedata/:id',async(req,res)=>{
        try{
        const data= await user.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        console.log("The updated data is",data);
        res.status(200).json(data)
        }catch(err){
    res.status(500).json("failed")
        }
    })
module.exports=router