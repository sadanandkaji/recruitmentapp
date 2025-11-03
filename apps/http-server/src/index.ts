
import express from "express"
import {client} from "@repo/db/client"


const app = express();

app.get("/" ,(req,res)=>{
    res.send("hi there")
})

app.post("/signup",async (req,res)=>{

    const username=req.body.username;
    const password=req.body.password;

   const user =await client.users.create({
        data:{
            username:username,
            password:password
        }
    })

    res.json({
        message:"signup successfull",
        id:user.id
    })

})


app.listen(3001)