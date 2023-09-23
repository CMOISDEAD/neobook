import { RxStitchesLogo } from "react-icons/rx";

const App = () => {
  const handleClick = () => {
    alert("This work is under construction.");
  };

  return (
    <div className="flex flex-col justify-between content-center items-center py-5 w-full h-full min-h-screen">
      <div className="flex justify-center content-center items-center h-full">
        <button
          className="text-7xl transition-colors animate-pulse hover:animate-none text-primary hover:hover:text-emerald-500/30"
          onClick={handleClick}
        >
          <RxStitchesLogo />
        </button>
      </div>
      <p className="text-xs text-center text-gray-500">
        Neobook is under development, check our{" "}
        <a
          href="https://github.com/CMOISDEAD/neobook"
          target="_blank"
          className="link"
        >
          github repository
        </a>{" "}
        for more information.
      </p>
    </div>
  );
};

export default App;
