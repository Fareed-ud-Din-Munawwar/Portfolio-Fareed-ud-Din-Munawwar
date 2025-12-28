import { motion } from "framer-motion";
import { Layers, Trophy } from "lucide-react";
import type { Project } from "@shared/schema";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project & { image?: string };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Check if image exists, fallback to placeholder
  const hasImage = project.image && project.image !== "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors shadow-lg hover:shadow-primary/10 group h-full flex flex-col"
    >
      {/* Media Area */}
      <div className="h-48 w-full bg-muted/20 relative overflow-hidden group-hover:bg-muted/30 transition-colors">
        {hasImage ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const placeholder = target.nextElementSibling as HTMLElement;
              if (placeholder) placeholder.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          className={`absolute inset-0 flex items-center justify-center text-muted-foreground/30 ${hasImage ? 'hidden' : ''}`}
        >
          <Layers className="w-12 h-12" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-400" />
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-foreground font-display group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-primary font-medium mt-1">{project.role}</p>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-6 flex-1">
            <h4 className="text-sm font-semibold text-foreground flex items-center mb-3">
              <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Layers className="w-4 h-4 mr-2" />
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-secondary/50 hover:bg-secondary text-xs font-mono"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
