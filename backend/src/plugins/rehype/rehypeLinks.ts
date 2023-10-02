import { visitParents } from "unist-util-visit-parents";

const rehypeLinks = () => {
  return (tree: any) => {
    visitParents(tree, "element", (node: any, ancestors: any) => {
      if (node.tagName !== "a") return;
      const { properties } = node;
      if (!properties.href.startsWith("file:")) return;
      const href = properties.href.replace("file:", "");
      node.tagName = "Link";
      node.properties = {
        to: `${href}`,
      };
    });
  };
};

export default rehypeLinks;
