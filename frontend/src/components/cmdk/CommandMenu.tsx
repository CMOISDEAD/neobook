import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { actions } from "../../utils/actions";
import { CommandsActions } from "./CommandsActions";

export const CommandMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: any) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed top-0 right-0 bottom-0 left-0 z-50 p-2 rounded border bg-base-200/30 backdrop-blur border-base-300"
    >
      <div className="flex justify-center items-center h-full">
        <div>
          <Command.Input className="input input-bordered bg-base-200/10" />
          <Command.List className="py-2 px-5">
            <Command.Empty>No results found.</Command.Empty>
            <CommandsActions />
          </Command.List>
        </div>
      </div>
    </Command.Dialog>
  );
};
