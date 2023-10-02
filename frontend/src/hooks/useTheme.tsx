import useStoreApp from "../store/store";

const applyTheme = (theme: string) => {
  useStoreApp.setState({ theme: theme });
  window.localStorage.setItem("theme", theme);
  document.querySelector("html")!.setAttribute("data-theme", theme);
};

export const useTheme = () => {
  let theme = window.localStorage.getItem("theme") || "dark";
  applyTheme(theme);

  const toggleTheme = () => {
    theme = theme === "lofi" ? "dark" : "lofi";
    applyTheme(theme);
  };

  return { theme, toggleTheme };
};
