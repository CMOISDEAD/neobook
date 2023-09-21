import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Viewer } from "../components/Viewer";
import useStoreApp from "../store/store";

export const Preview = () => {
  const [html, setHtml] = useState("connecting...");
  const { file } = useParams();
  const navigate = useNavigate();
  const socket = useStoreApp((state: any) => state.socket);
  if (socket) socket.emit("select-file", { file });

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
