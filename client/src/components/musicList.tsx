//  import axios from "../apis/axios";
// import HomePage from '../pages/navBarHome'
import { useState,useEffect } from "react";
import Music from '../types/musicType'
import {getAll} from '../apis/songsService'
// type Props={
//   Songs:Music[]
// }
function MusicList() {
const [songs,setSongs]=useState<Music[]>([])
 useEffect(()=>{
    async function getSongs(){
        try{
const response= await getAll()
if(response.status===200){
setSongs(response.data)
}
        }catch(error){
            console.log(error)
        }
    }
    getSongs();
 },[])
  return (
    <>
      <div style={{ marginTop: "4%" }}>
        <hr></hr>
        <h1>Top Hits </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Track</th>
              <th scope="col">Title</th>
              <th scope="col">Singer </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {songs.map(song=>(
 <tr>
              <th scope="row">{1}</th>
              <td>{song.title} </td>
              <td>{song.title} </td>
              
              <td>
                <b>+</b>
              </td>
            </tr>
            ))}
           
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MusicList;
