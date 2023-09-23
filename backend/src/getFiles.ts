import directoryTree from "directory-tree";
import { config } from "./config";

export const getFiles = () => {
  const data = directoryTree(config.notesDir);
  return data;
};
