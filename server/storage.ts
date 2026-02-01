import { messages, type Message, type InsertMessage } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  getMessages(): Promise<Message[]>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getMessages(): Promise<Message[]> {
    return await db.select().from(messages).orderBy(messages.createdAt);
  }
}

// In-memory storage for development when database is not available
export class InMemoryStorage implements IStorage {
  private messages: Message[] = [];
  private nextId = 1;

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = {
      id: this.nextId++,
      ...insertMessage,
      createdAt: new Date()
    };
    this.messages.push(message);
    return message;
  }

  async getMessages(): Promise<Message[]> {
    return [...this.messages].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }
}

// Use database storage if available, otherwise use in-memory storage
export const storage = db ? new DatabaseStorage() : new InMemoryStorage();
