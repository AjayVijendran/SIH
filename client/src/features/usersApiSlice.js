import { apiSlice } from "./apiSlice";

const USERS_URL = '/users'
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints :(builder)=>({
        login : builder.mutation({
            query : (data)=>({
                url : `${USERS_URL}/auth`,
                method : 'POST',
                body : data
            })
        }),
        register : builder.mutation({
            query : (data)=>({
                url : `${USERS_URL}`,
                method : 'POST',
                body : data
            })
        }),
        update  : builder.mutation({
            query : (data)=>({
                url : `${USERS_URL}/profile`,
                method : 'PUT',
                body : data
            })
        }),
        isauth : builder.mutation({
            query : ()=>({
                url : `${USERS_URL}/isauth`,
                method : 'GET'
            })
        }),
        logout : builder.mutation({
            query : ()=>({
                url : `${USERS_URL}/logout`,
                method : 'POST'
            })
        })
    })
})
export const {useLoginMutation,useRegisterMutation,useUpdateMutation,useIsauthMutation,useLogoutMutation}= usersApiSlice