import { useState, useEffect,ChangeEvent } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Music from "../types/musicType";
import { addToPlaylist, getAll } from "../apis/songsService";
import PubSub from "pubsub-js";
import logo from '../img/piano.jpeg'
import { NavLink } from "react-router-dom";
function Musiclist() {
const [allSongs, setAllSongs] = useState<Music[]>([]);
const [filteredSong,setFilteredSong]=useState<Music[]>([]);
const [searchedWord,setSearchedWord]=useState<string>('');

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
  const handleSearchInput=(e:ChangeEvent<HTMLInputElement>|null=null)=>{
    const keyword=e?e.target.value:searchedWord
setSearchedWord(keyword);
filterSong(keyword);
  };
  const handleKeyDown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==='Enter'){
      handleSearchInput()
    }
  }
  const filterSong=(keyWord:string)=>{
    const filtered:any=allSongs.filter(song=>song.title.toLowerCase().includes(keyWord.toLowerCase())
  )
  setFilteredSong(filtered)
  }
  const songsToShow = searchedWord ? filteredSong : allSongs;
  
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ justifyContent: "space-between" }}
            >
              <img src={logo} alt="piano Logo" style={{ height: "100px" }} />
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search For a Song"
                  aria-label="Search"
                  value={searchedWord}
                  onChange={handleSearchInput}
                  onKeyDown={handleKeyDown}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <div>
                <NavLink to="/login">
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    style={{
                      display: "flex",
                      marginLeft: "3px",
                      alignItems: "end ",
                    }}
                  >
                    Log Out
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/**nav bar above this  */}
      <div style={{ marginTop: "1%" }}>
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
            {songsToShow.map((song, index) => (
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
