import { io } from "socket.io-client";
import useStoreApp from "../store/store";

const createSocket = () => {
  console.log("creating socket");
  const socket: any = io("http://localhost:3000");
  socket.on("connect", () => console.log("connected"));
  socket.on("disconnect", () => console.log("disconnect"));

  return socket;
};

export const useSocket = () => {
  const socket = useStoreApp.getState().socket;

  if (!socket) useStoreApp.setState({ socket: createSocket() });

  return {
    socket,
    disconnect: () => socket.disconnect(),
  };
};
