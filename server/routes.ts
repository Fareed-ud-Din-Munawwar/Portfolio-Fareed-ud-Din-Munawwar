import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    // Skills
    await storage.createSkill({
      category: "Languages",
      items: ["Kotlin", "Java", "TypeScript", "JavaScript", "PHP"]
    });
    await storage.createSkill({
      category: "Mobile Platforms and Frameworks",
      items: ["Android (Native)", "React Native", "Moodle Mobile", "Ionic", "Angular"]
    });
    await storage.createSkill({
      category: "Skills",
      items: ["Jetpack Compose", "XMLs", "React Native","Coroutines", "Flow", "Retrofit", "ExoPlayer", "Room", "SQL Delight"]
    });
    await storage.createSkill({
      category: "Architecture",
      items: ["MVVM", "Clean Architecture", "Multi-Module", "SOLID Principles"]
    });
    await storage.createSkill({
      category: "Tools",
      items: ["Firebase (Crashlytics, Firestore)", "Hilt", "Dagger", "Git", "Mockito", "Xcode", "MySQL"]
    });

    // Projects
    await storage.createProject({
      title: "Islam360 & Hindi Hadith 360",
      role: "Lead Android Developer",
      description: "Contributed to applications with 4.8+ ratings on Google Play through enhanced stability and user satisfaction.",
      techStack: ["Kotlin", "MVVM", "Jetpack Compose", "Mockito"],
      achievements: [
        "Led development using Kotlin and MVVM architecture",
        "Implemented location-based prayer timings and interactive UI redesign",
        "Achieved ~90% code coverage by introducing Unit Testing",
        "Managed multi-lingual support and in-app purchases"
      ],
      link: "#"
    });
    await storage.createProject({
      title: "Schoolgram (Moodle-Based E-Learning)",
      role: "Lead Developer for Mobile",
      description: "Upgraded core codebase from Moodle Mobile 3.5.5 to 5.0.0, ensuring functionality of all custom components.",
      techStack: ["Ionic", "Angular", "Moodle Mobile"],
      achievements: [
        "Migrated and refactored custom plugins/libraries",
        "Implemented customized app themes and multi-lingual support",
        "Defined and executed release processes for Play Store & App Store"
      ],
      link: "#"
    });
    await storage.createProject({
      title: "ALW (Advanced Learning World)",
      role: "Key Android Developer",
      description: "Built critical modules from scratch, including Assignment, Calendar, and Quiz.",
      techStack: ["Kotlin", "Hilt", "Firebase", "OneSignal"],
      achievements: [
        "Integrated HyperPay and Google In-App Purchases",
        "Maintained 99.98% crash-free experience",
        "Revamped signup and subscription flows"
      ],
      link: "#"
    });
    await storage.createProject({
      title: "Reel / Stories Application",
      role: "Open Source Contributor",
      description: "An Instagram-like stories implementation designed for seamless video playback.",
      techStack: ["Native Android", "Kotlin", "ExoPlayer"],
      achievements: [
        "Designed for high reusability in external projects",
        "Seamless video playback implementation"
      ],
      link: "#"
    });

    // Experience
    await storage.createExperience({
      role: "Senior Software Engineer",
      company: "Arbisoft",
      period: "August 2021 – Present",
      description: "Leading cross-functional teams in Agile environments. Actively involved in hiring processes for senior roles and mentoring interns in native development."
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Only seed database if DATABASE_URL is set (for static sites, skip this)
  if (process.env.DATABASE_URL) {
    await seedDatabase();
  }

  // API routes are optional - only register if database is available
  // For static sites, these routes won't be called anyway
  if (process.env.DATABASE_URL) {
    app.get(api.projects.list.path, async (_req, res) => {
      try {
        const projects = await storage.getProjects();
        res.json(projects);
      } catch (err) {
        res.status(500).json({ message: "Database not available" });
      }
    });

    app.get(api.skills.list.path, async (_req, res) => {
      try {
        const skills = await storage.getSkills();
        res.json(skills);
      } catch (err) {
        res.status(500).json({ message: "Database not available" });
      }
    });

    app.get(api.experience.list.path, async (_req, res) => {
      try {
        const exp = await storage.getExperience();
        res.json(exp);
      } catch (err) {
        res.status(500).json({ message: "Database not available" });
      }
    });

    app.post(api.contact.submit.path, async (req, res) => {
      try {
        const input = api.contact.submit.input.parse(req.body);
        await storage.createContactMessage(input);
        res.json({ success: true });
      } catch (err) {
        if (err instanceof z.ZodError) {
          res.status(400).json({ message: "Invalid input" });
        } else {
          res.status(500).json({ message: "Internal server error" });
        }
      }
    });
  }

  return httpServer;
}
