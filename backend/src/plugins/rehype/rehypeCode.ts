const rehypeCode = () => {
  return (tree: any) => {
    tree.children = tree.children.map((node: any) => {
      if (node.tagName !== "pre") return node;
      const children = node.children[0];
      if (children.tagName !== "code") return node;
      const className = children.properties.className[0];
      if (className === "language-mermaid") {
        return {
          type: "element",
          tagName: "div",
          properties: {
            className: "mermaid",
          },
          children: children.children,
        };
      }
      return node;
    });
  };
};

export default rehypeCode;
