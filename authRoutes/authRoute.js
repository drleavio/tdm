import express from "express"
const router=express.Router();


router.get("/",(req,res)=>{
    return res.send({msg:"helllo"})
})

export default router;