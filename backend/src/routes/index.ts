import express from "express";
import { readdir } from "node:fs/promises";
import { config } from "../config";

const router = express();

router.get("/", (_req: any, res: any) => {
  res.send("Hello World!");
});

router.get("/files", async (_req: any, res: any) => {
  const allFiles = await readdir(config.notesDir);
  const data = allFiles.map((file) => file.replace(".md", ""));
  res.send(data);
});

export default router;
