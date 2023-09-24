import { visitParents } from "unist-util-visit-parents";

const remarkImages = () => {
  return (tree: any) => {
    visitParents(tree, "image", (node: any, _ancestors: any) => {
      const { url } = node;
      if (url.startsWith("http")) return node;
      node.url = `http://localhost:3000/${url}`;
    });
  };
};

export default remarkImages;
