import { useState, useEffect } from "react";
import { MdRemoveCircle } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import PubSub from "pubsub-js";

import Music from "../types/musicType";
import { getPlaylist } from "../apis/songsService";
import { removeSong } from "../apis/songsService";



function MyPlaylists() {
  const [playlist, setPlayList] = useState<Music[]>([]);
  
  useEffect(() => {
 
      PubSub.subscribe("addSongToPlaylist", fetchPlaylist);
       
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
  const handleRemoveSong = async (songId: string) => {
    await removeSong(songId);
    const updatedlist = await getPlaylist();
    setPlayList(updatedlist.data);
  };


//for audio 
  const handlePublishSong = async (song: Music) => {
    PubSub.publish("songToPlay", song);
  
  };




  return (
    <div style={{ marginTop: "20px" }}>
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
                <button onClick={() => handleRemoveSong(song.songId)}>
                  <MdRemoveCircle />
                </button>
                &nbsp;&nbsp;
                <button onClick={()=> handlePublishSong(song)}>
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
