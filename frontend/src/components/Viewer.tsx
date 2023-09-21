// @ts-ignore
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
import { useEffect } from "react";

export const Viewer = ({ html }: any) => {
  useEffect(() => {
    mermaid.init({
	theme: "dark"
    });
  }, [html]);

  return (
    <div
      className="py-2 px-3 max-w-none prose lg:prose-lg"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};
