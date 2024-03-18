import axios from "axios"

export const getMovies= async()=>{
    const res = await axios.get("http://localhost:3030/api/movie/",{
        headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjVjMmViNmNkOWIxMzdkY2M1NTliOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDY1MzQxNywiZXhwIjoxNzExMDg1NDE3fQ.GkaNrJXGejUFaytT4igaIZR_LcZrsLlEZ5p9VRfQy6E"
        }
    });
    return res;
}


export const deletemovie = async(id)=>{
    const response = await axios.delete(`http://localhost:3030/api/movie/${id}`,{
        headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjVjMmViNmNkOWIxMzdkY2M1NTliOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDY1MzQxNywiZXhwIjoxNzExMDg1NDE3fQ.GkaNrJXGejUFaytT4igaIZR_LcZrsLlEZ5p9VRfQy6E"
        }
    })
    
}

export const createmovie = async(movieInfo)=>{
    const res = await axios.post("http://localhost:3030/api/movie",movieInfo,{
        headers:{
            token :"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjVjMmViNmNkOWIxMzdkY2M1NTliOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDY1MzQxNywiZXhwIjoxNzExMDg1NDE3fQ.GkaNrJXGejUFaytT4igaIZR_LcZrsLlEZ5p9VRfQy6E"
        }
    });
    console.log("res from movieAPI",res);
    return res;
}