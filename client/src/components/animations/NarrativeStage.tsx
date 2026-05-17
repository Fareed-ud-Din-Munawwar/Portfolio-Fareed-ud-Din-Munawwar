import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MobileMockup } from "./MobileMockup";

export const NarrativeStage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Position, Scale, Rotation mapping
  // Hero: center (0,0), scale 1, rotate (0,0)
  // About: left (-30vw, 0), scale 0.9, rotate (0, 15)
  // Skills: right (30vw, 0), scale 0.9, rotate (0, -15)
  // Experience: center (0, 0), scale 1.1, rotate (15, 0)
  // Projects: center-bottom (0, 20vh), scale 1.2, rotate (0, 0)
  
  const x = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], ["0vw", "-25vw", "25vw", "0vw", "0vw", "0vw"]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], ["0vh", "0vh", "0vh", "0vh", "20vh", "40vh"]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 0.85, 0.85, 1.1, 1.2, 1]);
  const rotateX = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0, 0, 15, 0, 0]);
  const rotateY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 20, -20, 0, 0, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.9, 1], [1, 1, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center overflow-hidden">
      <motion.div style={{ opacity }}>
        <MobileMockup 
          position={{ x: x as any, y: y as any }}
          scale={scale as any}
          rotation={{ x: rotateX as any, y: rotateY as any }}
        />
      </motion.div>
    </div>
  );
};
