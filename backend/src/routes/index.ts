import express from "express";
import directoryTree from "directory-tree";
import { config } from "../config";

const router = express();

router.get("/files", async (_req: any, res: any) => {
  const data = directoryTree(config.notesDir);
  res.send(data);
});

export default router;
