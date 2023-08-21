import { useContext, useEffect, useRef, useState } from "react";
import { jarvisContext } from "../../context/jarvis.context";
import MusicIcon from "../../static/music-icon.png";

const SongWidget = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const { state, setState } = useContext(jarvisContext);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current || state.song === null) return;

    if (state.song.id !== selectedSong?.id) {
      setSelectedSong(state.song);
      if (state.song) {
        audioRef.current.src = state.song.song;
        audioRef.current.play();
      }
    } else {
      if (state.playingSong) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [state.song, state.playingSong]);

  return (
    <div className=" bg-[#313339]">
      <audio
        ref={audioRef}
        onPlay={() => {
          setIsPlaying(true);
          console.log("playing");
        }}
        onPause={() => {
          setIsPlaying(false);
          console.log("paused");
        }}
      >
        <source src="path_to_audio_file.mp3" type="audio/mpeg" />
      </audio>
      {selectedSong && (
        <div className="text-center py-[40px] text-white">
          <img src={MusicIcon} className="h-[90px] mx-auto" />
          <div>
            <div className="text-xl font-semibold text-center">
              {selectedSong.name}
            </div>
            <div className="flex gap-2 justify-center">
              <div className="text-sm font-thin text-center">
                {selectedSong.singer}, {selectedSong.mood}
              </div>
            </div>
            <div className="text-sm font-thin mt-3 text-center">
              {state.playingSong ? "Playing" : "Paused"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SongWidget;
