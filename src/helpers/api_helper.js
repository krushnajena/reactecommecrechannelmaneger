import axios from "axios"
//apply base url for axios
const API_URL = "https://channelmanager.herokuapp.com/api"






export async function getWithAuth(url, config = {}) {
  console.log(url);
  const obj = await localStorage.getItem("authUser")
  const axiosApi = axios.create({
    baseURL: API_URL,
  })
  axiosApi.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
  )
  axiosApi.defaults.headers.common["Authorization"] = "Bearer "+obj;

  return await axiosApi.get(url, { ...config }).then(response =>{
    console.log(response.data);
    return response.data
  } )
}

export async function postWithAuth(url, data, config = {}) {
  const obj = await localStorage.getItem("authUser")
  const aaxiosApi = axios.create({
    baseURL: API_URL,
  })
  
  aaxiosApi.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
  )
  aaxiosApi.defaults.headers.common["Authorization"] = "Bearer "+obj;
  return  aaxiosApi
    .post(url, { ...data }, { ...config })
    .then(response => {
     return  response.data})
     .catch(error=>{
      return error.response.data;
     })
}

export  function post(url, data, config = {}) {
  const aaxiosApi = axios.create({
    baseURL: API_URL,
  })
  
  return  aaxiosApi
    .post(url, { ...data }, { ...config })
    .then(response => {
     return  response.data})
     .catch(error=>{
      return error.response.data;
     })
  
  
}
