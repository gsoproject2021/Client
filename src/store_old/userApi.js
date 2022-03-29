import { createApi,fakeBaseQuery } from "@reduxjs/toolkit/dist/query";

// export const userApi = createApi({
//     reducerPath: 'userApi',
//     baseQuery: fakeBaseQuery({url:'http://localhost:4000/'}),
//     endpoints: (build)=>({
//         getUser: build.query({
//             query: (userName,password)=>({
//                 url:'user',
//                 method: 'GET',
//                 body: userName,password
//             }),
//         }),
//         signUpUser: build.query({
//             query: ()
//         })
//     })
// });