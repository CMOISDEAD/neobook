import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RxArrowLeft,
  RxAvatar,
  RxFileText,
  RxGithubLogo,
  RxHamburgerMenu,
  RxRulerSquare,
} from "react-icons/rx";
import axios from "axios";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/files");
      setFiles(data);
    })();
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${
          isOpen ? "hidden" : "block"
        } flex fixed top-1 left-1 z-50 p-2 bg-base-300/80`}
        onClick={handleOpen}
      >
        <RxHamburgerMenu />
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } flex sticky top-0 flex-col justify-between content-center p-2 w-3/12 h-screen bg-base-200/80`}
      >
        <div className="files">
          <div className="flex gap-4 content-center items-center justify-between pb-1 border-b border-primary/50">
            <Link to="/" className="flex content-center items-center gap-4">
              <h1 className="text-xl font-bold">Navigation</h1>
            </Link>
            <button className="btn btn-ghost" onClick={handleOpen}>
              <RxHamburgerMenu />
            </button>
          </div>
          <ul className="list-item">
            {files.map((file, idx) => (
              <li key={idx} className="my-2">
                <Link to={`/file/${file}`}>
                  <button
                    className="flex justify-start w-full btn btn-primary"
                    value={file}
                  >
                    <RxFileText />
                    {file}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-1 border-t border-primary/50 join">
          <button className="flex gap-4 content-center items-center w-1/3 btn join-item">
            <RxAvatar />
          </button>
          <button className="flex gap-4 content-center items-center w-1/3 btn join-item">
            <RxRulerSquare />
          </button>
          <a
            href="https://github.com/CMOISDEAD"
            target="_blank"
            className="flex gap-4 content-center items-center w-1/3 btn join-item"
          >
            <RxGithubLogo />
          </a>
        </div>
      </div>
    </>
  );
};
