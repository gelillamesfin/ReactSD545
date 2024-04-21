import "./App.css";
import routes from "./routes/routes";
import { useRoutes } from "react-router-dom";
// import Music from "./types/musicType";
// import {useState,useEffect} from 'react'
// import {getAll} from './apis/songsService'
//import MusicList from "./components/musicList";
 
function App() {
//   const [songs, setSongs] = useState<Music[]>([]);
//   useEffect(() => {
//     async function getSongs() {
//       try {
//         const response = await getAll();
//         if (response.status === 200) {
//           setSongs(response.data);
//         }else{
//           console.error('Failed to fetch songs')
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getSongs();
//   }, []);
 
//   const onAddNewSong=(song:Music)=>{
//  setSongs([...songs,song])
//   }
const element=useRoutes(routes)
  return (
    <div>
    {element}

    </div>
  );
}

export default App;
