"use client";
import { useEffect, useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        tag.onload = () => {
          window.YT.ready(() => {
            setPlayer(
              new window.YT.Player(videoRef.current, {
                videoId: "uhYHpVROC7I",
                playerVars: { controls: 1, rel: 0, showinfo: 0 },
                events: {
                  onReady: (event) => event.target.pauseVideo(),
                },
              })
            );
          });
        };
        document.body.appendChild(tag);
      } else {
        setPlayer(
          new window.YT.Player(videoRef.current, {
            videoId: "uhYHpVROC7I",
            playerVars: { controls: 1, rel: 0, showinfo: 0 },
            events: {
              onReady: (event) => event.target.pauseVideo(),
            },
          })
        );
      }
    };

    loadYouTubeAPI();
  }, []);

  const handleVideoClick = () => {
    if (player) {
      const state = player.getPlayerState();
      if (state === 1) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  };

  return (
    <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden cursor-pointer" onClick={handleVideoClick}>
      <div ref={videoRef} id="youtube-player" className="w-full h-full"></div>
    </div>
  );
};

export default VideoPlayer;
