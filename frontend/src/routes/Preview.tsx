import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Viewer } from "../components/Viewer";
import { useSocket } from "../hooks/useSocket";

export const Preview = () => {
  const [html, setHtml] = useState("connecting...");
  const { file } = useParams();
  const navigate = useNavigate();
  const { socket } = useSocket();
  socket.emit("select-file", { file });

  useEffect(() => {
    if (socket === null) {
      navigate("/");
      return;
    }
    socket.on("file-change", (value: any) => {
      setHtml(value);
    });
  }, []);

  return <Viewer html={socket ? html : "problem with socket connection"} />;
};
