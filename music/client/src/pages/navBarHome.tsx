import React from "react";
import "./musicList.css";
import logo from "../img/piano.jpeg";  
import { NavLink } from "react-router-dom";
// import ReactJkMusicPlayer from "react-jinke-music-player";
 
import { AudioPlayer } from "react-audio-player-component";
function HomePage() {

  return (
    <>
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
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul> */}
            {/**need to move this but the search bar moves to the left when moved  */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
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
      {/**nav bar ends here , table starts here */}

      <div style={{ marginTop: "4%" }}>
        <hr></hr>
        <h1>Top Hits </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "9px" }}>
        <hr></hr>
        <h1>MyPlay Lists </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
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
      <div style={{display:'flex',justifyContent:'center', paddingBottom:"10px"}}>
        {/* <ReactJkMusicPlayer
        audioLists={[{
          name:'GELILLA',
          singer:'gelilla',
          musicSrc:'url',
          cover:'lululala'
        }
        ]}/> */}
        <AudioPlayer
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
        />
      </div>
    </>
  );
}

export default HomePage;
