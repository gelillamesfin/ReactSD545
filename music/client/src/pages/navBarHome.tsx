import MusicList from "../components/musicList";
import MyplayLists from "../components/myplayLists";

import AudioPlayer from "../components/AudioPlayer";

function HomePage() {
 
  return (
    <>
      <MusicList />
      <MyplayLists />
        <AudioPlayer />
    </>
  );
}

export default HomePage;
