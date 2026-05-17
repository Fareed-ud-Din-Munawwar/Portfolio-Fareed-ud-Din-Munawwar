import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Layers, Trophy, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import React from "react";

interface ProjectCardProps {
  project: Project & { image?: string };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Check if image exists, fallback to placeholder
  const hasImage = project.image && project.image !== "";

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="bg-neutral-900/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/50 transition-colors duration-500 shadow-2xl h-full flex flex-col"
      >
        {/* Media Area */}
        <div className="h-56 w-full bg-neutral-800 relative overflow-hidden">
          {hasImage ? (
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
          ) : null}
          <div 
            className={`absolute inset-0 flex items-center justify-center text-white/10 ${hasImage ? 'hidden' : ''}`}
          >
            <Layers className="w-16 h-16" />
          </div>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
          
          {/* Badge */}
          <div className="absolute top-6 right-6">
            <Badge className="bg-primary text-black font-black uppercase tracking-tighter px-3 py-1 shadow-xl">
              {project.role.split(' ')[0]}
            </Badge>
          </div>
        </div>

        <div className="p-8 md:p-10 flex-1 flex flex-col" style={{ transform: "translateZ(30px)" }}>
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-black text-white font-display leading-tight group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-primary font-bold mt-2 uppercase tracking-[0.2em] text-xs opacity-80">{project.role}</p>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed font-light text-lg">
            {project.description}
          </p>

          {project.achievements && project.achievements.length > 0 && (
            <div className="mb-8 flex-1">
              <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] flex items-center mb-4">
                <Trophy className="w-3 h-3 mr-2 text-primary" />
                Key Milestones
              </h4>
              <ul className="space-y-3">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start group/item">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 mr-3 flex-shrink-0 group-hover/item:bg-primary transition-colors" />
                    <span className="group-hover/item:text-white transition-colors">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto pt-8 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-wider text-white/40 group-hover:border-primary/20 group-hover:text-primary transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" />
      </div>
    </motion.div>
  );
}
