import axios from "axios";
 import Urls from "./Urls"

export const Loginapi = async(data)=>{
    console.log(" data yaha: " ,data)
   return await axios.post(Urls+'/login',data);
}