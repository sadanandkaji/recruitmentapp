import axios from "axios";
import { useState } from "react";

export async function authapi(username:string ,password:string ,type:string){

    try{
       const res= await axios.post("https://staging.1st-fedev.sadanandkaji.com/signup",{
            username,
            password,
            type
        })

        console.log("signup successfull")
        return res.data
    }catch(e){
        console.log(e)
    }
    
   
}

