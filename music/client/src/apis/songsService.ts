import http from "./axios";
import User from "../types/login";

const token=localStorage.getItem('token')

export const signIn =  (data: User) => {
  return http.post("/api/auth/login", data);
};

export const  getAll=()=>{
  if(token){
    http.defaults.headers['Authorization']=`Bearer ${token}`
  }
  return http.get('/api/music')
}

export const getPlayList=()=>{
if(token){
  http.defaults.headers['Authorization']=`Bearer ${token}`
}
return http.get('/api/playlist')
}