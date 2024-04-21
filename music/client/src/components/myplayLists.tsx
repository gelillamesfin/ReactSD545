import { MdRemoveCircle } from "react-icons/md";
import { useState, useEffect } from "react";
import Music from "../types/musicType";
import { getPlaylist } from "../apis/songsService";
import { FaPlayCircle } from "react-icons/fa";
import PubSub from "pubsub-js";
import {removeSong} from '../apis/songsService'
function MyPlaylists() {
  const [playlist, setPlayList] = useState<Music[]>([]);
  useEffect(() => {
    const subPlayList = () => {
      PubSub.subscribe("addSongToPlaylist", fetchPlaylist);
    };
    subPlayList();
    fetchPlaylist();
    return () => {
      PubSub.unsubscribe("addSongToPlaylist");
    };
  }, []);

  const fetchPlaylist = async () => {
    try {
      const response = await getPlaylist();
      setPlayList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
const handleRemoveSong=async(songId:string)=>{
const response = await removeSong(songId);
const updatedlist = await getPlaylist()
setPlayList(updatedlist.data)
console.log(response.data,'from removehandle playlist')
}
  return (
    <div style={{ marginTop: "90px" }}>
      <h1>MyPlay Lists </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Track</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((song, index) => (
            <tr key={song.id}>
              <th scope="row">{index + 1}</th>
              <td>{song.title}</td>

              <td>
                <button onClick={()=>handleRemoveSong(song.songId)}>
                  <MdRemoveCircle />
                </button>
                &nbsp;&nbsp;
                <button>
                  <FaPlayCircle />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyPlaylists;
