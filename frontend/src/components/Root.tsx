import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { io } from "socket.io-client";
import { Sidebar } from "./Sidebar";
import useStoreApp from "../store/store";

export const Root = () => {
  useEffect(() => {
    const socket: any = io("http://localhost:3000");
    useStoreApp.setState({ socket });
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("disconnect", () => console.log("disconnect"));

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex relative gap-4">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
