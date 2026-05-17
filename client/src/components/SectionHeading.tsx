import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-20 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <h2 className="text-4xl md:text-6xl font-black font-display text-foreground relative inline-block tracking-tighter uppercase leading-none">
          {title}
          <div className="absolute -bottom-4 left-0 w-24 h-2 bg-primary rounded-full" />
        </h2>
        {subtitle && (
          <p className="mt-10 text-muted-foreground max-w-2xl mx-auto text-xl font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
