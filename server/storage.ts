import { db } from "./db";
import {
  projects, skills, experience, contactMessages,
  type Project, type Skill, type Experience, type InsertContactMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getExperience(): Promise<Experience[]>;
  createContactMessage(message: InsertContactMessage): Promise<void>;
  
  // Seeding methods
  createProject(project: Omit<Project, "id">): Promise<void>;
  createSkill(skill: Omit<Skill, "id">): Promise<void>;
  createExperience(exp: Omit<Experience, "id">): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    if (!db) throw new Error("Database not initialized");
    return await db.select().from(projects);
  }

  async getSkills(): Promise<Skill[]> {
    if (!db) throw new Error("Database not initialized");
    return await db.select().from(skills);
  }

  async getExperience(): Promise<Experience[]> {
    if (!db) throw new Error("Database not initialized");
    return await db.select().from(experience);
  }

  async createContactMessage(message: InsertContactMessage): Promise<void> {
    if (!db) throw new Error("Database not initialized");
    await db.insert(contactMessages).values(message);
  }

  async createProject(project: Omit<Project, "id">): Promise<void> {
    if (!db) throw new Error("Database not initialized");
    await db.insert(projects).values(project);
  }

  async createSkill(skill: Omit<Skill, "id">): Promise<void> {
    if (!db) throw new Error("Database not initialized");
    await db.insert(skills).values(skill);
  }

  async createExperience(exp: Omit<Experience, "id">): Promise<void> {
    if (!db) throw new Error("Database not initialized");
    await db.insert(experience).values(exp);
  }
}

export const storage = new DatabaseStorage();
