import {createApi ,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const  cryptoApiHeaders ={
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '4246a716e8msh288f1cf3412885dp1677d4jsn34f00660fd76'
}
const baseUrl= "https://coinranking1.p.rapidapi.com"


const createRequest =(url)=>({url,headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath:'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints:(builder)=>({
    getCryptos:builder.query({
      query:()=> createRequest('/coins')
    })
  })
})

export const {
      useGetCryptosQuery,
} = cryptoApi;

