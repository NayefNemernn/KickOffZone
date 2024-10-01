import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PlayerShooting = () => {
  const playerRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: playerRef.current,
        start: "top center", // Start animation when the top of the player hits the center of the viewport
        end: "bottom center", // End when the bottom of the player hits the center
        scrub: true, // Smoothly catch up the animation to the scrollbar
      },
    });

    // Animating the player to slightly move in when scrolling
    tl.fromTo(playerRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

    // Animating the ball shooting out
    tl.fromTo(ballRef.current, { x: 0, y: 0, opacity: 0 }, { x: 300, y: -200, opacity: 1, duration: 2 });
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* Player Image */}
      <img
        ref={playerRef}
        src="src/assets/hero/player.png" 
        alt="Player Shooting"
        className="w-[300px] h-auto"
      />
      
      {/* Ball Image */}
      <img
        ref={ballRef}
        src="/path-to-ball-image.png" 
        alt="Ball"
        className="absolute top-1/2 left-1/2 w-[50px] h-auto"
      />
    </div>
  );
};

export default PlayerShooting;
