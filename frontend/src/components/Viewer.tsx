// @ts-ignore
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
import { useEffect } from "react";
import { Toolbar } from "./Toolbar";

export const Viewer = ({ html }: any) => {
  useEffect(() => {
    mermaid.init({
      theme: "dark",
    });
  }, [html]);

  return (
    <div className="relative w-full">
      <Toolbar />
      <div
        className="container py-2 px-3 mx-auto max-w-[90vw] prose lg:prose-lg"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
};
