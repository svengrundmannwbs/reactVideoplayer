import { useState, useRef, useEffect } from "react";
import {
  BsPlayCircle,
  BsPauseCircle,
  BsRewindCircle,
  BsFastForwardCircle,
  BsSkipBackwardCircle,
  BsSkipForwardCircle,
  BsFillVolumeUpFill,
  BsVolumeMuteFill,
} from "react-icons/bs";
import { Stack, Button } from "react-bootstrap";
import { useThemeContext } from "../hooks/useThemeContext";
import PlayList from "./PlayList";
import playList from "../../public/playList.json";

function VideoPlayer() {
  const { darkMode, setDarkMode } = useThemeContext();
  const [playing, setPlaying] = useState(false);
  const [videos, setVideos] = useState(playList);
  const [currentVid, setCurrenVid] = useState(0);
  const [muted, setMuted] = useState(false);
  let varBtn = darkMode ? "light" : "dark";
  let btnDisabled = currentVid === 0 ? "disabled" : "";
  let lastBtnDisabled = currentVid === videos.length - 1 ? "disabled" : "";

  const playVideo = () => {
    const playerObj = document.getElementById("player");
    playerObj.play();
    setPlaying(true);
  };

  const pauseVideo = () => {
    const playerObj = document.getElementById("player");
    playerObj.pause();
    setPlaying(false);
  };

  const skipF = () => {
    const playerObj = document.getElementById("player");
    playerObj.currentTime += 2;
  };

  const skipB = () => {
    const playerObj = document.getElementById("player");
    playerObj.currentTime -= 2;
  };

  const rewind = () => {
    setCurrenVid((curr) => (curr -= 1));
  };

  const next = () => {
    setCurrenVid((curr) => (curr += 1));
  };

  const mute = () => {
    const playerObj = document.getElementById("player");
    playerObj.muted = !playerObj.muted;
    setMuted((curr) => (curr = !curr));
  };

  useEffect(() => {
    setPlaying(false);
    const playerObj = document.getElementById("player");
    const curSource = document.getElementById("currentvid");
    if (curSource) {
      curSource.remove();
    }
    const source = document.createElement("source");
    source.src = videos[currentVid].sources;
    source.setAttribute("id", "currentvid");
    playerObj.appendChild(source);
    playerObj.load();
  }, [currentVid]);

  return (
    <div className="player">
      <div>
        <video
          id="player"
          poster={videos[currentVid].thumb}
          width="800"
          onEnded={() => setPlaying(false)}
        >
          <p>Your browser doesn't support HTML video.</p>
        </video>
        <Stack className="videoControl" direction="horizontal" gap={2}>
          <Button variant={varBtn} onClick={rewind} disabled={btnDisabled}>
            <BsSkipBackwardCircle />
          </Button>

          <Button variant={varBtn} onClick={skipB}>
            <BsRewindCircle />
          </Button>

          {playing ? (
            <Button variant={varBtn} onClick={pauseVideo}>
              <BsPauseCircle />
            </Button>
          ) : (
            <Button variant={varBtn} onClick={playVideo}>
              <BsPlayCircle />
            </Button>
          )}

          <Button variant={varBtn} onClick={skipF}>
            <BsFastForwardCircle />
          </Button>

          <Button variant={varBtn} onClick={next} disabled={lastBtnDisabled}>
            <BsSkipForwardCircle />
          </Button>

          {muted ? (
            <Button variant={varBtn} onClick={mute}>
              <BsVolumeMuteFill />
            </Button>
          ) : (
            <Button variant={varBtn} onClick={mute}>
              <BsFillVolumeUpFill />
            </Button>
          )}
        </Stack>
      </div>
      <PlayList
        videos={videos}
        currentVid={currentVid}
        setCurrenVid={setCurrenVid}
      />
    </div>
  );
}

export default VideoPlayer;
