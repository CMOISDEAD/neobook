import express from "express";
import http from "http";
import cors from "cors";
import chokidar from "chokidar";
import { Server } from "socket.io";
import { parseNote } from "./parse";
import { config } from "./config";
import router from "./routes";

let globalFile = "";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.set("port", process.env.PORT || 3000);
app.use(express.static(config.imagesDir));

app.use(cors());
app.use("/", router);

io.on("connection", async (socket) => {
  socket.on("select-file", async ({ file }) => {
    globalFile = file;
    const data = await parseNote(file);
    io.emit("file-change", data);
  });
});

chokidar.watch(config.notesDir).on("all", async () => {
  if (!globalFile) return io.emit("file-change", "Error no file selected.");
  const data = await parseNote(globalFile);
  io.emit("file-change", data);
});

server.listen(3000, () => {
  console.log(`listening on *:${app.get("port")}`);
});
