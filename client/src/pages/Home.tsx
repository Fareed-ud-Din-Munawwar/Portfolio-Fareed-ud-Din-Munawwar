import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects, useSkills, useExperience, useContact } from "@/hooks/use-portfolio";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown, Mail, Github, Linkedin, Smartphone, Code2, Database, Globe, Briefcase, GraduationCap, Trophy, Terminal, Award, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactMessage } from "@shared/routes";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: experience, isLoading: experienceLoading } = useExperience();
  const { mutateAsync: sendMessage, isPending: isSending } = useContact();
  const { toast } = useToast();
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContactMessage) => {
    try {
      await sendMessage(data);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const skillIcons: Record<string, any> = {
    "Languages": Code2,
    "Mobile Platforms": Smartphone,
    "Frameworks": Globe,
    "Tools": Terminal,
    "Architecture": Layers
  };

  // Helper function to get icon for category safely
  const getCategoryIcon = (category: string) => {
    // Basic fuzzy matching or default
    if (category.includes("Language")) return Code2;
    if (category.includes("Mobile")) return Smartphone;
    if (category.includes("Framework")) return Globe;
    if (category.includes("Tool")) return Terminal;
    return Database;
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-medium tracking-wider uppercase mb-4 text-sm md:text-base">
              Senior Software Engineer
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6">
              Fareed-ud-Din <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Munawwar
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 font-light leading-relaxed">
              Specialist in High-Performance Mobile Architectures & Scalable E-Learning Systems.
              Building applications that are stable, fast, and user-centric.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                <Button size="lg" className="rounded-full px-8 py-6 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
                <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base bg-white/5 border-white/10 hover:bg-white/10">
                  Contact Me
                </Button>
              </ScrollLink>
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold font-display text-white mb-1">99.98%</div>
                <div className="text-sm text-muted-foreground">Crash-Free Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-display text-white mb-1">4.8+</div>
                <div className="text-sm text-muted-foreground">Google Play Rating</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-card/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Using a placeholder for profile image or abstract shape if no image provided */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 flex items-center justify-center group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <Code2 className="w-32 h-32 text-white/10 group-hover:text-primary/20 transition-colors duration-500" />
                 
                 {/* Decorative elements */}
                 <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur p-4 rounded-xl border border-white/5 shadow-xl">
                   <div className="flex items-center gap-3">
                     <div className="p-2 bg-primary/20 rounded-lg text-primary">
                       <Award className="w-5 h-5" />
                     </div>
                     <div>
                       <div className="font-bold text-sm">Magna Cum Laude</div>
                       <div className="text-xs text-muted-foreground">Information Technology University</div>
                     </div>
                   </div>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Results-Driven Engineering</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I am a Senior Software Engineer with a proven track record in developing stable, user-friendly, and high-performing mobile applications. My expertise lies in architecting scalable solutions that millions of users rely on daily.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Beyond code, I focus on system reliability, user experience optimization, and mentoring junior developers to build robust engineering cultures.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">BS in Computer Science</h3>
                    <p className="text-muted-foreground">Information Technology University</p>
                    <p className="text-sm text-primary/80 mt-1">CGPA 3.75/4.0 • Magna Cum Laude</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Technical Expertise" subtitle="A comprehensive toolkit for modern application development" />

          {skillsLoading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[1,2,3].map(i => <div key={i} className="h-64 bg-card/50 rounded-2xl animate-pulse" />)}
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills?.map((skillGroup, index) => {
                const Icon = getCategoryIcon(skillGroup.category);
                return (
                  <motion.div
                    key={skillGroup.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-card hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold font-display">{skillGroup.category}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item) => (
                        <div key={item} className="px-3 py-1.5 rounded-md bg-white/5 text-sm font-mono text-muted-foreground border border-white/5 hover:border-primary/30 hover:text-primary transition-colors">
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Professional Journey" />

          <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-4">
            {experienceLoading ? (
              <div className="h-40 bg-card rounded-xl animate-pulse" />
            ) : (
              experience?.map((role, index) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] md:-left-[59px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-display text-foreground">{role.role}</h3>
                      <p className="text-lg text-primary">{role.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 sm:mt-0 w-fit text-muted-foreground border-white/10 bg-white/5">
                      {role.period}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed bg-card/50 p-6 rounded-2xl border border-white/5">
                    {role.description}
                  </p>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Featured Projects" subtitle="Scalable applications impacting millions of users" />

          {projectsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3].map(i => <div key={i} className="h-[400px] bg-card rounded-2xl animate-pulse" />)}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PERSONAL INTERESTS - Quick simple section */}
      <section className="py-24 bg-gradient-to-b from-card/30 to-background border-y border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-8">Beyond Engineering</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
               <div className="flex flex-col items-center gap-3 group">
                  <div className="p-4 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                     <Trophy className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-medium">Formula 1 Fan</span>
               </div>
               <div className="flex flex-col items-center gap-3 group">
                  <div className="p-4 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                     <Globe className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-medium">Cricket & Football</span>
               </div>
               <div className="flex flex-col items-center gap-3 group">
                  <div className="p-4 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                     <Smartphone className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-medium">Tech Community</span>
               </div>
            </div>
         </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Get in Touch" subtitle="Interested in collaboration? Let's discuss your next project." />

          <div className="grid md:grid-cols-5 gap-8 bg-card/50 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
             <div className="md:col-span-2 bg-gradient-to-br from-primary to-blue-600 p-8 text-white flex flex-col justify-between">
                <div>
                   <h3 className="text-2xl font-bold font-display mb-4">Contact Info</h3>
                   <p className="text-blue-100 mb-8">
                      I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                   </p>
                   
                   <div className="space-y-6">
                      <a href="mailto:hello@example.com" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                         <Mail className="w-5 h-5" />
                         <span>hello@example.com</span>
                      </a>
                      <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                         <Github className="w-5 h-5" />
                         <span>@fareedmunawwar</span>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                         <Linkedin className="w-5 h-5" />
                         <span>Fareed-ud-Din Munawwar</span>
                      </a>
                   </div>
                </div>
                
                <div className="mt-12 md:mt-0">
                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Mail className="w-8 h-8 text-white" />
                   </div>
                </div>
             </div>

             <div className="md:col-span-3 p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background/50 border-white/10 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-background/50 border-white/10 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project..." 
                              className="bg-background/50 border-white/10 focus:border-primary min-h-[120px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 shadow-lg shadow-primary/25"
                      disabled={isSending}
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
