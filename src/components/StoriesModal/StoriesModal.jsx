import { useEffect, useRef, useState } from "react";
import { useStoryPlayer } from "../../Hooks/useStoryPlayer";
import "./StoriesModal.css";

const IG_USER = "fitness.mati_";


export default function StoriesModal({ stories, initialStory = 0, onClose, }) {

    const [videoProgress, setVideoProgress] = useState(0);
    const [soundOn, setSoundOn] = useState(false);
    const [storyIdx, setStoryIdx] = useState(initialStory);
    const [itemIdx, setItemIdx] = useState(0);

  const videoRef = useRef(null);

  const story = stories[storyIdx];
  const item = story.items[itemIdx];
  const isVideo = item.type === "video";

  
  const duration = item.type === "video" ? item.duration : 5000;
  const resetKey = `${storyIdx}-${itemIdx}`;


  // 👉 cerrar con BACK móvil
  useEffect(() => {
    window.history.pushState({ stories: true }, "");
    const onPopState = () => onClose();
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [onClose]);

  // 👉 cerrar con ESC desktop
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const next = () => {
    if (itemIdx < story.items.length - 1) {
      setItemIdx((i) => i + 1);
    } else if (storyIdx < stories.length - 1) {
      setStoryIdx((s) => s + 1);
      setItemIdx(0);
    } else {
      onClose();
    }
  };

  const prev = () => {
    if (itemIdx > 0) {
      setItemIdx((i) => i - 1);
    } else if (storyIdx > 0) {
      const prevStory = stories[storyIdx - 1];
      setStoryIdx((s) => s - 1);
      setItemIdx(prevStory.items.length - 1);
    }
  };

    const { progress, setPaused } = useStoryPlayer(
        isVideo ? duration : duration,
        resetKey,
        next
    );

  const openInstagram = () => {
    const web = `https://www.instagram.com/${IG_USER}/`;
    
    window.open(web, "_blank");
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="story-box"
        onClick={(e) => e.stopPropagation()}

        onMouseDown={() => {
            setPaused(true);
            videoRef.current?.pause();
        }}

        onMouseUp={() => {
            setPaused(false);
            videoRef.current?.play();
        }}

        onTouchStart={() => {
            setPaused(true);
            videoRef.current?.pause();
        }}

        onTouchEnd={() => {
            setPaused(false);
            videoRef.current?.play();
        }}
     >

        {/* Progress */}
        <div className="progress">
          {story.items.map((_, i) => (
            <div key={i} className="bar">
              <div
                className="fill"
                style={{
                  width:
                    i < itemIdx
                    ? "100%"
                    : i === itemIdx
                    ? `${isVideo ? videoProgress : progress}%`
                    : "0%"
                }}
              />
            </div>
          ))}
        </div>

        {/* Media */}
        {item.type === "image" ? (
          <img src={item.src} alt="story" />
        ) : (
            <>
                <button className="sound-btn" onClick={() => setSoundOn(!soundOn)}>
                    {soundOn ? "🔊" : "🔇"}
                </button>
                <video
                    ref={videoRef}
                    src={item.src}
                    autoPlay
                    playsInline
                    muted={!soundOn}
                    onTimeUpdate={() => {
                        const video = videoRef.current;
                        if (!video) return;
                        const pct = (video.currentTime / video.duration) * 100;
                        setVideoProgress(pct);
                    }}
                    onEnded={next}
                />
            </>
        )}

        {/* Tap areas */}
        <div className="tap left" onClick={prev} />
        <div className="tap right" onClick={next} />

        {/* Desktop arrows */}
        <div className="arrow left" onClick={prev}>‹</div>
        <div className="arrow right" onClick={next}>›</div>

        {/* CTA */}
        <button className="cta" onClick={openInstagram}>
          Seguir
        </button>
      </div>
    </div>
  );
}
