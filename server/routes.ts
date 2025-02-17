import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const message = insertMessageSchema.parse(req.body);
      const result = await storage.createMessage(message);
      res.json(result);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ error: err.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.get("/api/medium-feed", async (_req, res) => {
    try {
      const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yourusername");
      const data = await response.json();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch Medium feed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
