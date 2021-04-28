import axios from "axios"

import { del, getWithAuth, post, postWithAuth } from "./api_helper"
import * as url from "./url_helper"

// Login Method
const  postLogin =async(data)  => {
    return await post(url.POST_LOGIN, data,{"Content-Type":"application/json","method":"post"})
}

const  postIntigrateNewChannel =async(data)  => {
    return await postWithAuth(url.POST_INTIGRATE_NEW_CHANNEL, data,{"Content-Type":"application/json","method":"post"})
}
const getMyChannels=async()=>{
    const obj = localStorage.getItem("authUser")
   
    return await getWithAuth(url.GET_CHANNELS,{"Content-Type":"application/json","method":"get","Authorization":"BEARER "+obj})
}
const getMyProducts=async()=>{
    const obj = localStorage.getItem("authUser")
   
    return await getWithAuth(url.GET_PRODUCTS,{"Content-Type":"application/json","method":"get","Authorization":"BEARER "+obj})
}

const getMyOrders=async()=>{
    const obj = localStorage.getItem("authUser")
   
    return await getWithAuth(url.GET_ORDERS,{"Content-Type":"application/json","method":"get","Authorization":"BEARER "+obj})
}
export {
    postLogin,
    getMyChannels,
    postIntigrateNewChannel,
    getMyProducts,
    getMyOrders
  }
