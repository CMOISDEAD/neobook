import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Viewer } from "../components/Viewer";
import { useSocket } from "../hooks/useSocket";

export const Preview = () => {
  const [html, setHtml] = useState("connecting...");
  const { socket } = useSocket();
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("on loop ?");
    socket.emit("select-file", { file: state });
    if (socket === null) {
      navigate("/");
      return;
    }
    socket.on("file-change", (value: any) => {
      setHtml(value);
    });
  });

  return <Viewer html={socket ? html : "problem with socket connection"} />;
};
