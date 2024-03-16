import axios from "axios"

export  const login = async(userCredentials)=>{
    try{

        const res =  await axios.post('http://localhost:3030/api/auth/login',userCredentials);
        return res;
    }catch(err){
        console.log("i'm the err.message",err.message);
        // return err.message;
    }
}