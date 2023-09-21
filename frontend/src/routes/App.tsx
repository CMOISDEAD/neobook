import { RxStitchesLogo } from "react-icons/rx";

const App = () => {
  const handleClick = () => {
    alert("This work is under construction.");
  };

  return (
    <div className="flex justify-center content-center items-center w-full h-full">
      <button
        className="text-5xl transition-colors text-primary hover:text-primary-focus"
        onClick={handleClick}
      >
        <RxStitchesLogo />
      </button>
    </div>
  );
};

export default App;
