import express from "express"
import {client} from "@repo/db/client"
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json())

app.get("/" ,(req,res)=>{
    res.send("hi there")
})

app.post("/signup",async (req,res)=>{

    const username=req.body.username;
    const password=req.body.password;
    const type =req.body.type

   const user =await client.users.create({
        data:{
            username:username,
            password:password,
            type:type
        }
    })

    res.json({
        message:"signup successfull",
        id:user.id
    })

})


app.listen(3001)