import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Smartphone, Signal, Battery, Wifi, Activity, TrendingUp, Users, ShieldCheck, Code2, Layers, Cpu } from "lucide-react";

interface MobileMockupProps {
  progress?: MotionValue<number>;
  screenContent?: React.ReactNode;
  rotation?: { x: MotionValue<number>; y: MotionValue<number> };
  scale?: MotionValue<number>;
  position?: { x: MotionValue<number>; y: MotionValue<number> };
}

export const MobileMockup = ({ 
  progress, 
  screenContent, 
  rotation, 
  scale, 
  position 
}: MobileMockupProps) => {
  return (
    <motion.div
      style={{
        perspective: 1200,
        rotateX: rotation?.x || 0,
        rotateY: rotation?.y || 0,
        scale: scale || 1,
        x: position?.x || 0,
        y: position?.y || 0,
        transformStyle: "preserve-3d",
      }}
      className="relative w-[min(280px,70vw)] h-[min(580px,80vh)] md:w-[min(300px,30vw)] md:h-[min(620px,75vh)] lg:w-[min(320px,25vw)] lg:h-[min(650px,70vh)] transition-all duration-300"
    >
      {/* Phone Body - Glassmorphic Approach */}
      <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl rounded-[3.5rem] border-[1px] border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col ring-1 ring-white/10">
        
        {/* Notch Area - Glassy */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-white/5 backdrop-blur-md rounded-b-3xl z-30 flex items-center justify-center gap-3 border-x border-b border-white/10">
          <div className="w-10 h-1 bg-white/20 rounded-full" />
          <div className="w-2.5 h-2.5 bg-white/20 rounded-full" />
        </div>

        {/* Status Bar */}
        <div className="absolute top-9 left-0 right-0 px-8 flex justify-between items-center z-20 text-[11px] text-white/40 font-bold tracking-tight">
          <span>9:41</span>
          <div className="flex gap-2">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Screen Content Area */}
        <div className="flex-1 relative overflow-hidden bg-black/40">
          {screenContent || <DefaultDashboard />}
          
          {/* Glass Reflection Overlay - Dynamic */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-black/20" />
        </div>
      </div>

      {/* 3D Sides - Glowing Edges */}
      <div className="absolute -inset-[1px] rounded-[3.5rem] border-[2px] border-white/5 pointer-events-none shadow-[0_0_20px_rgba(var(--primary),0.1)]" />
      
      {/* Background Glow - More subtle and integrated */}
      <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full scale-110 opacity-30" />
    </motion.div>
  );
};

const DefaultDashboard = () => (
  <div className="absolute inset-0 pt-20 pb-10 px-6 flex flex-col gap-6">
    <div className="flex items-center justify-between">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
        <Activity className="w-6 h-6 text-primary" />
      </div>
      <div className="flex -space-x-2.5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-9 h-9 rounded-full border-[3px] border-black bg-neutral-800 shadow-xl" />
        ))}
      </div>
    </div>

    <div className="space-y-1.5">
      <h3 className="text-white text-xl font-black tracking-tight">System Core</h3>
      <p className="text-white/30 text-xs font-bold uppercase tracking-widest">Android / iOS Nodes</p>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-neutral-900/40 backdrop-blur-md p-4 rounded-[1.5rem] border border-white/5 shadow-lg">
        <ShieldCheck className="w-5 h-5 text-primary mb-2.5" />
        <div className="text-2xl font-black text-white leading-none">99.9%</div>
        <div className="text-[10px] text-white/30 font-black uppercase tracking-widest mt-1">Uptime</div>
      </div>
      <div className="bg-neutral-900/40 backdrop-blur-md p-4 rounded-[1.5rem] border border-white/5 shadow-lg">
        <Cpu className="w-5 h-5 text-blue-400 mb-2.5" />
        <div className="text-2xl font-black text-white leading-none">12ms</div>
        <div className="text-[10px] text-white/30 font-black uppercase tracking-widest mt-1">Latency</div>
      </div>
    </div>

    <div className="flex-1 bg-neutral-900/40 backdrop-blur-md rounded-[2rem] border border-white/5 p-6 flex flex-col justify-between shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Traffic Load</span>
        <TrendingUp className="w-4 h-4 text-primary" />
      </div>
      <div className="flex items-end justify-between h-32 gap-1.5">
        {[30, 60, 40, 85, 55, 75, 45, 95, 65, 80].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: 0.2 + i * 0.05, duration: 1, ease: "circOut" }}
            className="w-full bg-gradient-to-t from-primary/10 to-primary/50 rounded-full"
          />
        ))}
      </div>
    </div>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full py-4 bg-primary rounded-2xl text-black font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20"
    >
      Deploy Updates
    </motion.button>
  </div>
);
