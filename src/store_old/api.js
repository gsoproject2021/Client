import {axios} from "axios";

const userId = 2;
// export const getRooms = async () =>{
//     const response = await fetch(`http://localhost:4000/rooms?userId=${userId}`)

//     if(!response.ok){
//         throw new Error('something went wrong');
//     }
    
    
//     return response.json();
// }

// const api = axios.create({
//     baseUrl:'http://localhost:4000'
// });

// export const getRooms = (userId) =>  {api.get(`http://localhost:4000/rooms/?userId=${userId}`).then(res=>res.data)}

// export const getRooms = (userId) => {
//     fetch(`http://localhost:4000/rooms?userId=${userId}`).then((res)=>{
//         console.log(res.json());
//         res.json();
//     }).
//     catch(err=>{
//         console.log(err);
//     })
// }