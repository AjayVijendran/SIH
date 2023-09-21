import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({baseUrl: 'https://z0mvqkeqb7.execute-api.ap-south-1.amazonaws.com/dev',credentials:"include"})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints : (builder)=>({})
});