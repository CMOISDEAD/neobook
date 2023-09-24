export const sortByAll = (children: any) => {
  const data = sortByFolders(children);
  return sortByAlphabet(data);
};

export const sortByFolders = (children: any) => {
  return children.sort(
    (a: any, b: any) => (b.children?.length || 0) - (a.children?.length || 0)
  );
};

export const sortByAlphabet = (children: any) => {
  return children.sort((a: any, b: any) => {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    else return 0;
  });
};
