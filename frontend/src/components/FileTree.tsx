import { useEffect, useState } from "react";
import { RxFileText } from "react-icons/rx";
import { GoFileDirectory } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useSocket } from "../hooks/useSocket";

export const FileTree = () => {
  const [files, setFiles] = useState([]);
  const { socket } = useSocket();

  useEffect(() => {
    socket.emit("get-files");
    socket.on("update-files", (data: any) => {
      setFiles(
        data.children.sort(
          (a: any, b: any) =>
            (b.children?.length || 0) - (a.children?.length || 0)
        )
      );
    });
  }, []);

  return <Files files={files} />;
};

const Files = ({ files }: any) => {
  return (
    <ul className="m-0">
      {files.map((child: any, i: number) =>
        child.children ? (
          <Dir child={child} key={i} idx={i} />
        ) : (
          <File child={child} key={i} idx={i} />
        )
      )}
    </ul>
  );
};

const Dir = (child: any) => {
  const { name, children } = child.child;
  return (
    <div className="w-full border border-transparent collapse collapse-arrow border-l-emerald-500">
      <input type="checkbox" />
      <div className="flex flex-nowrap gap-4 justify-start w-full h-full collapse-title btn bg-emerald-500/10 text-start">
        <GoFileDirectory />
        <p className="line-clamp-1">{name}</p>
      </div>
      <div className="p-0 collapse-content">
        <ul className="pl-4 m-0">
          <Files files={children} />
        </ul>
      </div>
    </div>
  );
};

const File = ({ child, idx }: any) => {
  const { path } = child;
  const name = child.name.split(".")[0];
  return (
    <li key={idx}>
      <NavLink
        to={`/file/${name}`}
        className={({ isActive, isPending }) =>
          `flex flex-nowrap justify-start w-full btn truncate ${isPending
            ? "bg-zinc-500/10"
            : isActive
              ? "bg-emerald-500/20"
              : "btn-ghost"
          }`
        }
        state={path}
      >
        <RxFileText />
        {name}
      </NavLink>
    </li>
  );
};
