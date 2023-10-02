import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch } from "kbar";
import { RenderResult } from "./RenderResults";

export const Portal = () => {
  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator className="w-1/2 bg-base-200/30 backdrop-blur">
          <KBarSearch className="my-2 w-full input input-bordered bg-base-200/10" />
          <RenderResult />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};
