import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-70" />
        </h2>
        {subtitle && (
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
