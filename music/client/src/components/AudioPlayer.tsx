import { useState, useEffect } from "react";
import Music from "../types/musicType";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import PubSub from "pubsub-js";

export default function AudioPlayerComponent() {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [playlist, setPlaylist] = useState<Music[]>([]);
  const [currentSong, setCurrentSong] = useState<Music>();

  useEffect(() => {
    const token = PubSub.subscribe(
      "addSongToPlaylist",
      (msg: string, newPlaylist: Music[]) => {
        setPlaylist(newPlaylist);
        setCurrentSongIndex(0);
        setCurrentSong(newPlaylist[0]);
      }
    );
    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  useEffect(() => {
    const token = PubSub.subscribe(
      "songToPlay",
      (msg: string, newsong: Music) => setCurrentSong(newsong)
    );

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  useEffect(() => {
    setCurrentSong(playlist[currentSongIndex]);
  }, [currentSongIndex, playlist]);

  const onPlayNextSong = () => {
    if (currentSongIndex < playlist.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const onPlayPreviousSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  return (
    <div>
      <AudioPlayer
        style={{ backgroundColor: "black", width: "100%" }}
        autoPlay={false}
        src={`http://localhost:3000/${currentSong?.urlPath}`}
        onClickNext={onPlayNextSong}
        onClickPrevious={onPlayPreviousSong}
      />
    </div>
  );
}
