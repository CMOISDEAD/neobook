// @ts-ignore
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
import { useEffect } from "react";

export const Viewer = ({ html }: any) => {
  useEffect(() => {
    mermaid.init({
      theme: "dark",
    });
  }, [html]);

  return (
    <div
      className="py-2 px-3 max-w-[90vw] prose lg:prose-lg container mx-auto"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};
