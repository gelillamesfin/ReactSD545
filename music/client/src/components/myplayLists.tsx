import { MdRemoveCircle } from "react-icons/md";
import {useState,useEffect} from 'react' 
import Music from "../types/musicType";
import {getPlayList} from '../apis/songsService'


function MyplayLists() {
const [playlist,setPlayList]=useState<Music[]>([]);

useEffect(()=>{
  
  async function fetchPlayList(){
      try{
      const response= await getPlayList();
      setPlayList(response.data)
      console.log(response.status)
    }catch(error){
      console.log(error)
    }
  }
fetchPlayList();
},[])

console.log(playlist);
  return (
    <div style={{ marginTop: "90px" }}>
      <h1>MyPlay Lists </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Track</th>
            <th scope="col">Title </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((song, index) => (
            <tr key={song.id}>
              <th scope="row">{index+1}</th>
              <td>{song.title}</td>
      
              <td>
                <MdRemoveCircle />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyplayLists
