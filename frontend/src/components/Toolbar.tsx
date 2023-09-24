import { RxDotsVertical } from "react-icons/rx";

export const Toolbar = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <button tabIndex={0} className="fixed top-1 right-1 btn btn-ghost">
        <RxDotsVertical />
        <div className="p-2 w-52 shadow dropdown-content z-[1] menu bg-base-200/80 rounded-box backdrop-blur">
          <li>
            <a>Export to pdf</a>
          </li>
        </div>
      </button>
    </div>
  );
};
