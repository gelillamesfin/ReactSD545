// import logo from "../img/piano.jpeg";  
// import { NavLink } from "react-router-dom";
import MusicList from '../components/musicList';
import NavOnly from './navOnly'
// import ReactJkMusicPlayer from "react-jinke-music-player";
 //import { AudioPlayer } from "react-audio-player-component";
function HomePage() {

  return (
    <>
      <NavOnly/>
      <MusicList/>
       {/* <div style={{ marginTop: "4%" }}>
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
            <tr>
              <th scope="row">1</th>
              <td>Singl ladies </td>
              <td>Beyonce </td>
              <td><b>+</b></td>
            </tr>
            
          </tbody>
        </table>
      </div> */}

      <div style={{ marginTop: "9px" }}>
        <hr></hr>
        <h1>MyPlay Lists </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Track</th>
              <th scope="col">Title </th>
              <th scope="col">Singer</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Lulu</td>
              <td>Lala</td>
              <td><b>-</b></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
        }}
      >
        {/* <ReactJkMusicPlayer
        audioLists={[{
          name:'GELILLA',
          singer:'gelilla',
          musicSrc:'url',
          cover:'lululala'
        }
        ]}/> */}
        {/* <AudioPlayer
          src="audios/test.mp3"
          minimal={false}
          width={350}
          trackHeight={5}
          barWidth={1}
          gap={1}
          visualise={true}
          backgroundColor="gray"
          barColor="#C1D0B5"
          barPlayedColor="gray"
          skipDuration={2}
          showLoopOption={true}
          showVolumeControl={true}
        /> */}
      </div>
    </>
  );
}

export default HomePage;
