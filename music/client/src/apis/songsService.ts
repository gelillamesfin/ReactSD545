import http from "./axios";
import User from "../types/login";

export const signIn = (data: User) => {
  return http.post("/api/auth/login", data);
};

export const getAll = (title = "") => {
  const token = localStorage.getItem("token");
  if (token) {
    http.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
  if (title) {
    return http.get(`/api/music?search=${title}`);
  } else {
    return http.get(`/api/music`);
  }
};

export const getPlaylist = () => {
  const token = localStorage.getItem("token");

  if (token) {
    http.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
  return http.get("/api/playlist"); 
};

export const removeSong = (songId: string) => {
  console.log(songId,'from remove service')
  const token = localStorage.getItem("token");

  if (token) {
    http.defaults.headers[`Authorization`] = `Bearer ${token}`;
  }
  return http.post(`/api/playlist/remove`,{songId});
};

export const addToPlaylist = (songId: string) => {
  const token = localStorage.getItem("token");
  if (token) {
    http.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
  return http.post("/api/playlist/add", { songId });
};
