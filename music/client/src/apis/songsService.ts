import http from "./axios";
import User from "../types/login";

export const signIn =  (data: User) => {
  return http.post("/api/auth/login", data);
};
export const  getAll=()=>{
  const token=localStorage.getItem('token')
  if(token){
    http.defaults.headers['Authorization']=`Bearer ${token}`
  }
  return http.get('/api/music')
}