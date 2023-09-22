const rehypeImages = () => {
  return (tree: any) => {
    tree.children = tree.children.map((node: any) => {
      if (node.tagName !== "p") return node;
      const children = node.children[0];
      if (children.tagName !== "img") return node;
      const { src, alt } = children.properties;
      children.properties = {
        src: `http://localhost:3000/${src}`,
        alt,
      };
      return node;
    });
  };
};

export default rehypeImages;
