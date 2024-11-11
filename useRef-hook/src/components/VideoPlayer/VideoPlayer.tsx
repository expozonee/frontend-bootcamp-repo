import { useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handleClick(action: string) {
    if (!videoRef.current) return;

    if (action === "play") {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div>
      <video ref={videoRef} src="\videos\No Copyright Drone Shots .mp4"></video>
      <button onClick={() => handleClick("play")}>Play</button>
      <button onClick={() => handleClick("pause")}>Pause</button>
    </div>
  );
}
