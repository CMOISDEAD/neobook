//@ts-ignore
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  RxAvatar,
  RxGithubLogo,
  RxHamburgerMenu,
  RxRulerSquare,
} from "react-icons/rx";
import { FileTree } from "./FileTree";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${
          isOpen ? "hidden" : "block"
        } flex fixed top-1 left-1 z-50 btn btn-ghost`}
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
          <div className="flex gap-4 justify-between content-center items-center pb-1 border-b border-primary/50">
            <Link to="/" className="flex gap-4 content-center items-center">
              <h1 className="text-xl font-bold">Navigation</h1>
            </Link>
            <div>
              <button className="btn btn-ghost" onClick={handleOpen}>
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
          <FileTree />
        </div>
        <div className="pt-1 border-t border-primary/50 join">
          <button
            className="flex gap-4 content-center items-center w-1/3 btn join-item"
            disabled
          >
            <RxAvatar />
          </button>
          <button
            className="flex gap-4 content-center items-center w-1/3 btn join-item"
            disabled
          >
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
