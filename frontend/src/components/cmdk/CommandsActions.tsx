import { Command } from "cmdk";
import { useTheme } from "../../hooks/useTheme";
import { useNavigate } from "react-router-dom";

export const CommandsActions = () => {
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();

  const actions = [
    {
      id: "blog",
      name: "Blog",
      subtitle: "Read my thoughts",
      shortcut: ["g", "b"],
      keywords: "writing words",
      perform: () => (window.location.pathname = "blog"),
    },
    {
      id: "github",
      name: "Github",
      subtitle: "See my code",
      shortcut: ["g", "g"],
      keywords: "code",
      perform: () => window.open("https://github.com/CMOISDEAD", "_blank"),
    },
    {
      id: "contact",
      name: "Contact",
      subtitle: "Get in touch",
      shortcut: ["g", "c"],
      keywords: "email",
      perform: () => (window.location.pathname = "contact"),
    },
    {
      name: "Toggle Theme",
      subtitle: "Toggle theme mode",
      shortcut: ["g", "t"],
      keywords: "theme",
      perform: () => {
        toggleTheme();
        navigate(0);
      },
    },
  ];

  return (
    <Command.Group heading="Letters">
      {actions.map((action, i) => (
        <Command.Item onSelect={action.perform} key={i}>
          {action.name}
        </Command.Item>
      ))}
    </Command.Group>
  );
};
