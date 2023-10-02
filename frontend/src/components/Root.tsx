import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useSocket } from "../hooks/useSocket";
import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { CommandMenu } from "./cmdk/CommandMenu";

export const Root = () => {
  useEffect(() => {
    useSocket();
    useTheme();
  }, []);

  return (
    <div className="flex relative">
      <CommandMenu />
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
