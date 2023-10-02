import { KBarResults, useMatches } from "kbar";

export const RenderResult = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div>{item}</div>
        ) : (
          <div
            className={`flex items-center justify-between px-2 py-1 shadow cursor-pointer ${
              active ? "bg-base-300/80" : "transparent"
            } `}
          >
            <div>
              <p className="font-bold">{item.name}</p>
              <p
                className={`text-xs ${
                  active ? "text-content" : "text-secondary"
                }`}
              >
                {item.subtitle}
              </p>
            </div>
            <kbd className="kbd">{item.shortcut}</kbd>
          </div>
        )
      }
    />
  );
};
