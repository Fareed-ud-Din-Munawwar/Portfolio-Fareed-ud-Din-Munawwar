import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface KineticTypographyProps {
  text: string;
  className?: string;
  velocity?: number;
}

export const KineticTypography = ({ text, className, velocity = 0.5 }: KineticTypographyProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div ref={ref} className={`pointer-events-none select-none overflow-hidden whitespace-nowrap ${className}`}>
      <motion.h2 
        style={{ x }}
        className="text-[20vh] md:text-[35vh] font-black uppercase leading-none opacity-[0.03] text-white italic"
      >
        {text}
      </motion.h2>
    </div>
  );
};
