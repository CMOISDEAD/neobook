const rehypeLinks = () => {
  return (tree: any) => {
    tree.children = tree.children.map((node: any) => {
      if (node.tagName !== "p") return node;
      const children = node.children[0];
      if (children.tagName !== "a") return node;
      children.tagName = "Link";
      children.properties = {
        to: children.properties.href,
      };
      console.log(children);
      return children;
    });
  };
};

export default rehypeLinks;
