import { useEffect, useState } from "react";
import { RxFileText } from "react-icons/rx";
import { GoFileDirectory } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

interface Props {
  children?: any;
}

export const Files = ({ children = [] }: Props) => {
  const [files, setFiles] = useState(children);

  useEffect(() => {
    if (files.length > 0) return;
    (async () => {
      const { data } = await axios.get("http://localhost:3000/files");
      setFiles(data.children);
    })();
  }, []);

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
    <div className="border border-transparent collapse collapse-arrow border-l-emerald-500">
      <input type="checkbox" />
      <div className="justify-start collapse-title btn bg-emerald-500/10">
        <GoFileDirectory />
        {name}
      </div>
      <div className="p-0 collapse-content">
        <ul className="pl-4 m-0">
          <Files children={children} />
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
          `flex justify-start w-full btn ${
            isPending
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
