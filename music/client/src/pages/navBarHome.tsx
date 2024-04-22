import MusicList from "../components/musicList";
import MyplayLists from "../components/myplayLists";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function HomePage() {
  return (
    <>

      <MusicList />
      <MyplayLists />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
          marginTop: "40px",
        }}
      >
        <AudioPlayer
          style={{ backgroundColor: "black" }}
          autoPlay
          src="http://example.com/audio.mp3"
          onPlay={(e) => console.log("onPlay")}
        />
      </div>
    </>
  );
}

export default HomePage;
