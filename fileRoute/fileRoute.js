import express from "express"

const router=express.Router();

router.get("/",(req,res)=>{
    return res.send("inside file")
})

export default router;