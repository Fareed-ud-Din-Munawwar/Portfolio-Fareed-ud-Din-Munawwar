import React, { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { staticProjects, staticSkills, staticExperience } from "@/data/portfolio";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Mail, Github, Linkedin, Smartphone, Code2, Globe, GraduationCap, Trophy, Terminal, Layers, Activity, ShieldCheck, Cpu, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TypingText } from "@/components/animations/TypingText";
import { MobileMockup } from "@/components/animations/MobileMockup";
import { Magnetic } from "@/components/animations/Magnetic";
import { KineticTypography } from "@/components/animations/KineticTypography";

const DefaultScreen = ({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) => (
  <div className="absolute inset-0 pt-20 pb-10 px-6 flex flex-col gap-6 bg-black/40">
    <div className="flex items-center justify-between">
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shadow-inner">
        {icon}
      </div>
      <div className="flex -space-x-2.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-9 h-9 rounded-full border-[3px] border-black bg-neutral-800" />
        ))}
      </div>
    </div>
    <div className="space-y-1.5">
      <h3 className="text-white text-xl font-black tracking-tight">{title}</h3>
      <p className="text-white/30 text-xs font-bold uppercase tracking-widest">{subtitle}</p>
    </div>
    <div className="flex-1 bg-neutral-900/40 backdrop-blur-md rounded-[2rem] border border-white/5 p-6 flex flex-col justify-end">
       <div className="flex items-end justify-between h-24 gap-1.5">
        {[40, 70, 45, 90, 65, 80, 50, 95].map((height, i) => (
          <div key={i} style={{ height: `${height}%` }} className="w-full bg-primary/20 rounded-full" />
        ))}
      </div>
    </div>
    <div className="w-full py-4 bg-primary/10 rounded-2xl border border-primary/20 text-primary text-center font-black uppercase tracking-widest text-[10px]">
      System Synchronized
    </div>
  </div>
);

export default function Home() {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Thank You!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <div ref={containerRef} className="bg-background text-foreground relative">
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className="relative z-30">
        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <KineticTypography text="DEVELOPER" className="absolute top-[20%] left-0" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" 
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-8 text-center lg:text-left order-2 lg:order-1"
              >
                <h2 className="text-primary font-black tracking-[0.3em] uppercase mb-6 text-sm">
                  Senior Software Engineer
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black font-display tracking-tighter mb-8 leading-[0.85] uppercase italic">
                  Fareed Ud Din <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">
                    Munawwar
                  </span>
                </h1>
                <div className="h-[80px] mb-12">
                  <TypingText 
                    text="Specialist in High-Performance Mobile Architectures & Scalable E-Learning Systems. Building applications that are stable, fast, and user-centric."
                    className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-xl mx-auto lg:mx-0"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                  <Magnetic><ScrollLink to="projects" smooth={true} duration={500}><Button className="h-20 px-12 rounded-3xl text-xl font-black uppercase tracking-widest shadow-2xl shadow-primary/40">View Work</Button></ScrollLink></Magnetic>
                  <Magnetic><ScrollLink to="contact" smooth={true} duration={500}><Button variant="outline" className="h-20 px-12 rounded-3xl text-xl font-black uppercase tracking-widest border-white/10 bg-white/5 backdrop-blur-md">Contact</Button></ScrollLink></Magnetic>
                </div>
              </motion.div>
              
              <div className="lg:col-span-4 flex justify-center items-center order-1 lg:order-2 px-4">
                <ScrollReveal delay={0.2}>
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative w-full flex justify-center"
                  >
                    <MobileMockup 
                      screenContent={<DefaultScreen icon={<Activity className="w-8 h-8 text-primary" />} title="System Core" subtitle="99.9% Uptime" />}
                    />
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full" />
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="relative min-h-screen py-24 flex items-center justify-center bg-card/10 overflow-hidden">
          <KineticTypography text="RELIABILITY" className="absolute bottom-[10%] right-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="hidden lg:flex lg:col-span-5 justify-center items-center px-4">
                <ScrollReveal delay={0.1}>
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateY: -10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative w-full flex justify-center"
                  >
                    <MobileMockup 
                      screenContent={<DefaultScreen icon={<ShieldCheck className="w-8 h-8 text-green-400" />} title="Stability" subtitle="99.98% Crash-Free" />}
                    />
                    <div className="absolute inset-0 bg-green-500/10 blur-[100px] -z-10 rounded-full" />
                  </motion.div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-7">
                <ScrollReveal>
                  <h2 className="text-5xl md:text-7xl font-black font-display mb-10 tracking-tighter uppercase italic leading-none">
                    Results-Driven <br /><span className="text-primary">Engineering.</span>
                  </h2>
                  <div className="space-y-6 text-xl md:text-2xl text-muted-foreground leading-relaxed font-light tracking-tight mb-12">
                    <p>
                      I am a Senior Software Engineer with a proven track record in developing stable, user-friendly, and high-performing mobile applications. My expertise lies in architecting scalable solutions that millions of users rely on daily.
                    </p>
                    <p>
                      Beyond code, I focus on system reliability, user experience optimization, and mentoring junior developers to build robust engineering cultures.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-6 p-8 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-xl">
                    <div className="p-5 rounded-2xl bg-primary text-black shadow-2xl shadow-primary/30">
                      <GraduationCap className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="font-black text-2xl uppercase tracking-tighter">BS Computer Science</h3>
                      <p className="text-white/40 font-bold uppercase tracking-widest text-xs mt-1">ITU • Magna Cum Laude</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
          <KineticTypography text="ARCHITECTURE" className="absolute top-[30%] left-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <h2 className="text-5xl md:text-7xl font-black font-display mb-12 tracking-tighter uppercase italic leading-none text-right lg:text-left">
                    Modern <br /><span className="text-primary">Stack.</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {staticSkills.map((skill, i) => (
                      <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                        <h4 className="font-black text-sm uppercase tracking-widest text-primary mb-3">{skill.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map(item => (
                            <span key={item} className="text-xs font-bold text-white/40">{item}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                </ScrollReveal>
              </div>

              <div className="hidden lg:flex lg:col-span-5 justify-center items-center px-4">
                <ScrollReveal delay={0.1}>
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative w-full flex justify-center"
                  >
                    <MobileMockup 
                      screenContent={<DefaultScreen icon={<Code2 className="w-8 h-8 text-blue-400" />} title="Tech Stack" subtitle="Modern Architecture" />}
                    />
                    <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="relative min-h-screen py-24 flex items-center justify-center bg-card/10 overflow-hidden">
          <KineticTypography text="EXPERIENCE" className="absolute top-[10%] left-0" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <ScrollReveal>
              <h2 className="text-6xl md:text-9xl font-black font-display mb-20 tracking-tighter uppercase italic text-white/10">JOURNEY</h2>
              <div className="space-y-12">
                {staticExperience.map((role, i) => (
                  <div key={i} className="relative group">
                    <div className="flex flex-col items-center gap-4">
                      <Badge className="bg-primary text-black font-black uppercase tracking-tighter px-4 py-1">{role.period}</Badge>
                      <h3 className="text-4xl md:text-5xl font-black tracking-tight">{role.role}</h3>
                      <p className="text-xl text-primary font-black uppercase tracking-[0.3em]">{role.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="relative py-24 min-h-screen flex flex-col justify-center overflow-hidden">
          <KineticTypography text="PORTFOLIO" className="absolute top-[20%] right-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-[8rem] font-black font-display tracking-tighter uppercase italic leading-none mb-6">Featured</h2>
              <p className="text-2xl text-muted-foreground font-light max-w-2xl mx-auto">Impactful mobile solutions delivered globally.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {staticProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* INTERESTS SECTION */}
        <section className="relative min-h-screen py-24 flex items-center justify-center bg-card/20 overflow-hidden">
          <KineticTypography text="BEYOND" className="absolute bottom-[20%] left-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <ScrollReveal>
              <h3 className="text-5xl md:text-[6rem] font-black font-display mb-20 uppercase tracking-tighter italic">Beyond Engineering</h3>
              <div className="flex flex-wrap justify-center gap-16 md:gap-32">
                 {[{ icon: Trophy, label: "F1 Fan" }, { icon: Globe, label: "Sports" }, { icon: Smartphone, label: "Tech" }].map((item, i) => (
                   <div key={i} className="flex flex-col items-center gap-6 group">
                      <div className="w-24 h-24 rounded-[2.5rem] bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500 border border-white/5">
                         <item.icon className="w-10 h-10 text-muted-foreground group-hover:text-black transition-colors" />
                      </div>
                      <span className="font-black text-sm uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors">{item.label}</span>
                   </div>
                 ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden">
          <KineticTypography text="CONTACT" className="absolute top-[10%] right-0" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <ScrollReveal>
              <div className="grid md:grid-cols-5 gap-0 bg-neutral-900/80 backdrop-blur-3xl rounded-[3.5rem] border border-white/5 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                 <div className="md:col-span-2 bg-primary p-12 flex flex-col justify-between text-black">
                    <div>
                      <h3 className="text-5xl font-black font-display tracking-tighter uppercase leading-none mb-8 italic">Let's <br />Talk.</h3>
                      <p className="font-bold text-lg mb-12 opacity-70">Building the future of mobile, together.</p>
                      <div className="space-y-6">
                        <a href="mailto:fareed.munawwar1@gmail.com" className="flex items-center gap-4 font-black uppercase tracking-tighter hover:opacity-50 transition-opacity"><Mail className="w-5 h-5" /> Email</a>
                        <a href="https://github.com/Fareed-ud-Din-Munawwar" target="_blank" rel="noreferrer" className="flex items-center gap-4 font-black uppercase tracking-tighter hover:opacity-50 transition-opacity"><Github className="w-5 h-5" /> GitHub</a>
                        <a href="https://www.linkedin.com/in/fareed-ud-din-munawwar-ab693a23a/" target="_blank" rel="noreferrer" className="flex items-center gap-4 font-black uppercase tracking-tighter hover:opacity-50 transition-opacity"><Linkedin className="w-5 h-5" /> LinkedIn</a>
                      </div>
                    </div>
                    <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center shadow-2xl mt-12">
                      <Smartphone className="w-10 h-10 text-primary" />
                    </div>
                 </div>
                 <div className="md:col-span-3 p-12">
                    <form onSubmit={handleContactSubmit} className="space-y-8">
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase tracking-widest text-white/30">Your Name</label>
                          <Input placeholder="John Doe" className="h-16 bg-white/5 border-white/5 rounded-2xl focus:border-primary transition-all" required />
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase tracking-widest text-white/30">Your Email</label>
                          <Input type="email" placeholder="john@example.com" className="h-16 bg-white/5 border-white/5 rounded-2xl focus:border-primary transition-all" required />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-white/30">Message</label>
                        <Textarea placeholder="How can I help you?" className="min-h-[180px] bg-white/5 border-white/5 rounded-2xl focus:border-primary transition-all resize-none" required />
                      </div>
                      <Button type="submit" className="w-full h-20 bg-primary text-black font-black uppercase tracking-widest text-lg rounded-2xl shadow-2xl shadow-primary/20">Send Message</Button>
                    </form>
                 </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
