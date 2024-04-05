import axios from "axios"
export const createlist = async (listData)=>{

    const response = await axios.post("http://localhost:3030/api/list",listData,{
        headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjVjMmViNmNkOWIxMzdkY2M1NTliOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDY1MzQxNywiZXhwIjoxNzExMDg1NDE3fQ.GkaNrJXGejUFaytT4igaIZR_LcZrsLlEZ5p9VRfQy6E"
        }

    })
    return response;
}










