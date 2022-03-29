import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const roomsApi = createApi({
    reducerPath: 'roomsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/'}),
    tagTypes:['Rooms'],
    endpoints: (build) =>({
        getRooms: build.query({
            query: (userId)=> ({url:`/rooms?userId=${userId}`}),
            providesTags:(result,arg)=> result
            ? [
                ...result.map(({ id }) => ({ type: 'Rooms', id:arg })),
                { type: 'Rooms', id: 'LIST' },
            ]
            : [{ type: 'Rooms', id: 'LIST' }],
        }),
        addRoom: build.mutation({
            query: (body)=>({
                url:`rooms`,
                method: 'POST',
                body
            }),
            invalidatesTags:[{type:'Rooms',id:'LIST'}],
        }),
        editRoom: build.mutation({
            query: ({roomId,newRoomName})=>({
                url:`rooms?roomName=${roomId}`,
                method: 'PUT',
                body: newRoomName
            }),
        }),
        deleteRoom: build.mutation({
            query: (roomId)=>({
                url:`rooms?userId=${roomId}`,
                method:'DELETE',

            }),
        }),
        getUsers: build.query({
            query: (roomId)=>({url: `users/?roomId=${roomId}`}),
            providesTags:(result)=> result
            ? [
                ...result.map(({ id }) => ({ type: 'Users', id })),
                { type: 'Users', id: 'LIST' },
              ]
            : [{ type: 'Users', id: 'LIST' }],
        }),
        addUser: build.mutation({
            query:(roomId,userId)=>({
                url:`users`,
                method:'POST',
                body:roomId,userId

            }),
        }),
        // removeUser: build.mutation({
        //     query:(userId,roomId)=>({
        //         url: 'users',
        //         method:'DELETE',
        //         body:userId,roomId
        //     }),
        // }),
        // getEvents: build.query({
        //     query: (roomId)=>({url: `users/?roomId=${roomId}`}),
        //     providesTags:(result)=> result
        //     ? [
        //         ...result.map(({ id }) => ({ type: 'Events', id })),
        //         { type: 'Events', id: 'LIST' },
        //       ]
        //     : [{ type: 'Events', id: 'LIST' }],
        // }),
        // addEvent: build.mutation({
        //     query: (roomId,event)=>({
        //         url:'events',
        //         method:'POST',
        //         body:roomId,event
        //     })
        // }),
        // updateEvent:build.mutation({
        //     query: (eventId,event)=>({
        //         url:'events',
        //         method:'PUT',
        //         body:eventId,event
        //     }),
        // }),
        // deleteEvent: build.mutation({
        //     query: (eventId)=>({
        //         url:'events',
        //         method:'DELETE',
        //         body:eventId
        //     }),
        // }),
    }),
});

export const {useGetRoomsQuery,useAddRoomMutation,useEditRoomMutation,useDeleteRoomMutation} = roomsApi;