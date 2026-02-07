import { useEffect, useRef, useState } from "react";

export function useStoryPlayer(duration, resetKey, onEnd) {
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const startTime = useRef(0);
  const frame = useRef(null);
  const onEndRef = useRef(onEnd);

  useEffect(() => {
    onEndRef.current = onEnd;
  }, [onEnd]);

  useEffect(() => {
    startTime.current = performance.now();
    setProgress(0);

    const animate = (now) => {
      if (!paused) {
        const elapsed = now - startTime.current;
        const pct = Math.min((elapsed / duration) * 100, 100);
        setProgress(pct);

        if (pct >= 100) {
          onEndRef.current();
          return;
        }
      } else {
        startTime.current += 16;
      }

      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [duration, resetKey, paused]); // 🔥 resetKey es la clave

  return { progress, setPaused };
}



// import { useEffect, useRef, useState } from "react";

// export function useStoryPlayer(duration, onEnd) {
//   const [progress, setProgress] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const startTime = useRef(0);
//   const frame = useRef(null);
//   const onEndRef = useRef(onEnd);

//   // Mantener referencia estable a onEnd
//   useEffect(() => {
//     onEndRef.current = onEnd;
//   }, [onEnd]);

//   // Reiniciar cuando cambia la duración (imagen / video)
//   useEffect(() => {
//     startTime.current = performance.now();
//     setProgress(0);

//     const animate = (now) => {
//       if (!paused) {
//         const elapsed = now - startTime.current;
//         const pct = Math.min((elapsed / duration) * 100, 100);
//         setProgress(pct);

//         if (pct >= 100) {
//           onEndRef.current(); // 🔥 estable
//           return;
//         }
//       } else {
//         // Compensar pausa (igual que IG)
//         startTime.current += 16;
//       }

//       frame.current = requestAnimationFrame(animate);
//     };

//     frame.current = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(frame.current);
//   }, [duration, paused]); // 👈 IMPORTANTE

//   return { progress, setPaused };
// }
