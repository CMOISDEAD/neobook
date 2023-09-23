import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useSocket } from "../hooks/useSocket";
import { useEffect } from "react";

export const Root = () => {
  useEffect(() => {
    useSocket();
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
