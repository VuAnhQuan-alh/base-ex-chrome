import "../index.css";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [count, setCount] = useState(0);

  const handleClose = () => {
    document.querySelector("#mainX").classList.add("hiddenX");
    document.querySelector("#iconX").classList.remove("hiddenX");
  };

  const fnCounted = () => {
    setCount((num) => num + 2);
  };

  useEffect(() => {
    document.querySelector("#chestX").addEventListener("click", fnCounted);
    return () => {
      document.querySelector("#chestX").removeEventListener("click", fnCounted);
    };
  }, []);

  return (
    <section className="h-full w-full bg-[#fafafa] text-center absolute top-0 right-0">
      <button
        onClick={handleClose}
        className="absolute top-3 left-3 p-2 rounded-md bg-white cursor-pointer outline-0 border-0"
      >
        <IconX size={16} />
      </button>

      <section className="flex justify-center gap-x-3 mb-2 mt-8">
        <img
          src="https://www.svgrepo.com/show/8815/coin.svg"
          className="logo"
          alt="Vite logo"
        />
        <img
          src="https://www.svgrepo.com/show/452092/react.svg"
          className="logo react"
          alt="React logo"
        />
      </section>

      <h2 className="text-xl font-semibold text-slate-700 mb-2">
        Coin XPet Extension
      </h2>

      <button
        className="rounded bg-slate-200 text-slate-700"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>

      <p className="read-the-docs mt-2 font-[SVN-Gilroy] text-[14px] font-medium">
        Click on the Coin and React logos to learn more
      </p>
    </section>
  );
};
export default MainPage;

const IconX = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-x"
  >
    <path d="M18 6l-12 12"></path>
    <path d="M6 6l12 12"></path>
  </svg>
);
