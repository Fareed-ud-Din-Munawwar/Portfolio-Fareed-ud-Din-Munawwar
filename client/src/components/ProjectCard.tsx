import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Trophy } from "lucide-react";
import type { Project } from "@shared/schema";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors shadow-lg hover:shadow-primary/10 group h-full flex flex-col"
    >
      {/* Decorative gradient header */}
      <div className="h-2 w-full bg-gradient-to-r from-primary to-blue-400" />
      
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground font-display group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-primary font-medium mt-1">{project.role}</p>
          </div>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full text-muted-foreground hover:text-primary hover:bg-white/10 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-muted-foreground mb-6 line-clamp-3">
          {project.description}
        </p>

        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-6 flex-1">
            <h4 className="text-sm font-semibold text-foreground flex items-center mb-2">
              <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
              Key Achievements
            </h4>
            <ul className="space-y-1">
              {project.achievements.slice(0, 3).map((achievement, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                  {achievement}
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
