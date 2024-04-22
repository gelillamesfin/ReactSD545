import { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Music from "../types/musicType";
import { addToPlaylist, getAll } from "../apis/songsService";
import PubSub from "pubsub-js";

function Musiclist() {
  const [allSongs, setAllSongs] = useState<Music[]>([]);

  useEffect(() => {
    async function getAllSongs() {
      try {
        const response = await getAll();
        if (response.status === 200) {
          setAllSongs(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAllSongs();
  }, []);

  const handlePublishSong = async (song: Music) => {
    PubSub.publish("addSongToPlaylist", song);
    try {
      await addToPlaylist(song.id);
    } catch {
      console.error();
    }
  };
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
              <th scope="col">Release Date </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allSongs.map((song, index) => (
              <tr key={song.id}>
                <th scope="row">{index + 1}</th>
                <td>{song.title} </td>
                <td>{song.releaseDate} </td>

                <td>
                  <button onClick={() => handlePublishSong(song)}>
                    <IoMdAddCircle />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Musiclist;
