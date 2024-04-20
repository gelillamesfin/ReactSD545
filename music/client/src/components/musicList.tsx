import { useState,useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
 
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
              <th scope="col">Release Date  </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={song.id}>
                <th scope="row">{index + 1}</th>
                <td>{song.title} </td>
                <td>{song.releaseDate} </td>

                <td>
                  <IoMdAddCircle />
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
